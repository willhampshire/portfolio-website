"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import fetchNewGame from "../utils/apiCall";

interface GameData {
    words: string[];
    categories: Record<string, string[]>;
}

// Predefined word sets for testing (initial game state)
const testGameData: GameData = {
    words: [
        "Apple", "Banana", "Cherry", "Grape",
        "Blue", "Red", "Green", "Yellow",
        "Dog", "Cat", "Fish", "Bird",
        "Hammer", "Screwdriver", "Wrench", "Pliers"
    ],
    categories: {
        "Fruits": ["Apple", "Banana", "Cherry", "Grape"],
        "Colors": ["Blue", "Red", "Green", "Yellow"],
        "Animals": ["Dog", "Cat", "Fish", "Bird"],
        "Tools": ["Hammer", "Screwdriver", "Wrench", "Pliers"]
    }
};

// Global cache to store word lists by session ID
const gameCache: Record<string, GameData[]> = {};

export default function ConnectionsPage() {
    const [selectedWords, setSelectedWords] = useState<string[]>([]);
    const [words, setWords] = useState<string[]>([]);
    const [categories, setCategories] = useState<Record<string, string[]>>({});
    const [message, setMessage] = useState<string>("");
    const [attempts, setAttempts] = useState<number>(0);
    const [gameId, setGameId] = useState<string>("");

    useEffect(() => {
        // Generate a unique game ID and load initial data
        const id = uuidv4();
        setGameId(id);

        // Initialize cache for this session if not already present
        if (!gameCache[id]) {
            gameCache[id] = [testGameData]; // Start with initial game data
        }

        // Load the initial game data
        loadWords(testGameData);
    }, []);

    const loadWords = (data: GameData) => {
        setWords([...data.words].sort(() => Math.random() - 0.5)); // Shuffle words
        setCategories(data.categories);
        setSelectedWords([]);
        setAttempts(0);
        setMessage("");
    };

    const regenerateWords = async () => {
        const prompt = `Your detailed prompt for generating game data...`;

        try {
            const newGameData = await fetchNewGame(prompt);
            if (newGameData) {
                // Cache the new game data for this session
                gameCache[gameId].push(newGameData);

                // Load the newly generated game data
                loadWords(newGameData);
            } else {
                setMessage("Failed to regenerate words. Please try again later.");
            }
        } catch (error) {
            setMessage("Error regenerating words. Please try again later.");
            console.error("Error regenerating words:", error);
        }
    };

    const handleWordClick = (word: string) => {
        if (selectedWords.includes(word)) {
            setSelectedWords(selectedWords.filter(w => w !== word));
        } else {
            setSelectedWords([...selectedWords, word]);
        }
    };

    const checkSelection = () => {
        const foundCategory = Object.entries(categories).find(([_, categoryWords]) =>
            selectedWords.every(word => categoryWords.includes(word)) && selectedWords.length === 4
        );
        if (foundCategory) {
            setMessage(`Correct! You found the category: ${foundCategory[0]}`);
            setWords(words.filter(word => !selectedWords.includes(word)));
            setSelectedWords([]);
        } else if (selectedWords.length !== 4) {
            setMessage("Please select 4 words to make a category.");
        } else {
            setMessage("Try again!");
            setAttempts(attempts + 1);
        }
    };

    const loadCachedGame = () => {
        if (gameCache[gameId].length > 1) {
            const lastGame = gameCache[gameId].shift()!;
            loadWords(lastGame);
        } else {
            setMessage("No more cached games. Please regenerate words.");
        }
    };

    return (
        <div className="relative z-0 flex justify-center p-4">
            <main className="w-full z-0 max-w-4xl bg-black bg-opacity-40 backdrop-blur-2xl p-6 rounded-lg shadow-lg">
                <div className="rounded-3xl p-4 md:p-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Connections Word Game</h1>
                    <div className="my-8 text-lg text-gray-200">
                        Select 4 words of the same category or theme. Wrong attempts: {attempts}
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
                        {words.map(word => (
                            <button
                                key={word}
                                className={`p-4 text-center font-semibold rounded-lg transition ${
                                    selectedWords.includes(word)
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-900"
                                }`}
                                onClick={() => handleWordClick(word)}
                            >
                                {word}
                            </button>
                        ))}
                    </div>

                    <div className="text-center">
                        <button
                            className="px-6 py-2 mx-5 my-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
                            onClick={checkSelection}
                        >
                            Submit
                        </button>
                        <button
                            className="px-6 py-2 mx-5 my-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
                            onClick={regenerateWords}
                        >
                            Regenerate Words
                        </button>
                        <button
                            className="px-6 py-2 mx-5 my-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                            onClick={loadCachedGame}
                        >
                            Load Cached Game
                        </button>
                    </div>

                    {message && <div className="mt-4 text-center text-lg font-medium text-yellow-400">{message}</div>}
                </div>
            </main>
        </div>
    );
}
