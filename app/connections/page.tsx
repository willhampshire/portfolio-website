"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Add UUID library for generating game IDs
import fetchNewGame from "../utils/apiCall";


interface GameData {
    words: string[];
    categories: Record<string, string[]>;
}

// Predefined word sets for testing (original and regenerated)
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

const secondGameData: GameData = {
    words: [
        "Orange", "Peach", "Mango", "Pineapple",
        "Pink", "Purple", "Brown", "Black",
        "Horse", "Rabbit", "Deer", "Bear",
        "Drill", "Saw", "Chisel", "Level"
    ],
    categories: {
        "Fruits": ["Orange", "Peach", "Mango", "Pineapple"],
        "Colors": ["Pink", "Purple", "Brown", "Black"],
        "Animals": ["Horse", "Rabbit", "Deer", "Bear"],
        "Tools": ["Drill", "Saw", "Chisel", "Level"]
    }
};

export default function ConnectionsPage() {
    const [selectedWords, setSelectedWords] = useState<string[]>([]);
    const [words, setWords] = useState<string[]>([]);
    const [categories, setCategories] = useState<Record<string, string[]>>({});
    const [message, setMessage] = useState<string>("");
    const [attempts, setAttempts] = useState<number>(0); // State to track attempts count
    const [gameId, setGameId] = useState<string>(""); // Unique game ID for this session

    useEffect(() => {
        // Generate a unique game ID and load the initial game data
        const id = uuidv4();
        setGameId(id);
        loadWords(testGameData); // Load initial words
    }, []);

    const loadWords = (data: GameData) => {
        setWords([...data.words].sort(() => Math.random() - 0.5)); // Shuffle words
        setCategories(data.categories);
        setSelectedWords([]); // Deselect all words
        setAttempts(0); // Reset attempts
        setMessage(""); // Clear any message
    };

    const apiCallNewWords = async (prompt: string) => {
        try {
            const response = await fetchNewGame(prompt); // Use await to get the result of fetchNewGame
            if (response.error) {
                console.error("API Error:", response.error);
                return null; // Return null if there's an error
            } else {
                console.log("Model Response:", response);
                const responseString = response.replace(/\\"/g, '"');
                const responseJSON = JSON.parse(responseString)
                console.log(responseJSON.words)
                console.log(responseJSON.categories)

                const newData: GameData = {
                    words: responseJSON.words,
                    categories: responseJSON.categories,
                };
                return newData; // Return the response
            }
        } catch (error) {
            console.error("Unexpected Error:", error);
            return null; // Return null in case of an unexpected error
        }
    };


    const regenerateWords = async () => {
        const prompt = `You are an eloquent human, with a large linguistic knowledge.
        Generate a set of 16 words that belong to 4 different categories. (REPLICATE NYT's 'Connections').
        The categories must be distinct and each category should have exactly 4 words. 
        The categories should be related to themes, such as fruits, colors, animals, and tools (these are very easy
        so, please, make them more challenging for HIGH DIFFICULTY). DO NOT APPLY THE SAME THEME TO EVERY CATEGORY, EG COMMON SUFFIXES - this is easy and boring.
        E.g. DO NOT RESPOND WITH THESE CATEGORIES LIKE THESE IN SIMILARITY: "Unreal and Untrue", "Unfair and Unjust", "Unscrupulous and Unprincipled".
        This is also awful because all the words begin with 'un'. THE CATEGORIES SHOULD BE COMPLETELY UNRELATED!!!!!! However,
        you may use words such as 'Orange', eg is is Fruit and Colour, for example. THIS IS 
        WHAT MAKES THE GAME FUN. However, it HAS TO MAKE SOME KIND OF SENSE.
        EACH WORD HAS TO BE DIFFERENT.
        Create VERY LARGE VARIATION between categories, 
        and throw in curved balls where the user may mistake words in difference categories for being related (eg Orange).
        Use SOLELY British English in concept and spelling. Please 
        make it VERY DIFFICULT to find the connections/themes!!! - 
        Make it less obvious which word is in which category by using lots of words with dual meanings that could be in 
        some categories (that aren't the ones chosen) - eg if I have Saw, it can be a verb or a tool, only ONE of which
        will be the category.
        
        
        The output should be in the following format: 
        {\\"words\\": [\\"word1\\", \\"word2\\", \\"word3\\", \\"word4\\", \\"word5\\", \\"word6\\", 
        \\"word7\\", \\"word8\\", \\"word9\\", \\"word10\\", \\"word11\\", \\"word12\\", \\"word13\\", 
        \\"word14\\", \\"word15\\", \\"word16\\"], \\"categories\\": 
        {\\"Category1\\": [\\"word1\\", 
        \\"word2\\", \\"word3\\", \\"word4\\"], \\"Category2\\": [\\"word5\\", \\"word6\\", \\"word7\\", 
        \\"word8\\"], \\"Category3\\": [\\"word9\\", \\"word10\\", \\"word11\\", \\"word12\\"], 
        \\"Category4\\": [\\"word13\\", \\"word14\\", \\"word15\\", \\"word16\\"]}}
        
        Please create and name the categories sensibly, that explain the connection well and concisely. 
       
        ONLY PROVIDE OUTPUT AS DETAILED ABOVE. DO NOT PROVIDE ANY OTHER TEXT.
        `
        try {
            const data = await apiCallNewWords(prompt);
            if (data) {
                loadWords(data); // if data is not null
                console.log(data)
            } else {
                setMessage("Failed to regenerate words. Please try again later.");
            }
        } catch (error) {
            setMessage("Failed to regenerate words. Please try again later.");
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
        } else if (
            selectedWords.length === 4 &&
            Object.entries(categories).some(([_, categoryWords]) => {
                const correctWords = selectedWords.filter(word => categoryWords.includes(word));
                return correctWords.length === 3;
            })
        ) {
            setMessage("You're 1 away!");
            setAttempts(attempts + 1);
        } else {
            setMessage("Try again!");
            setAttempts(attempts + 1);
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
                    </div>

                    {message && <div className="mt-4 text-center text-lg font-medium text-yellow-400">{message}</div>}
                </div>
            </main>
        </div>
    );
}
