'use server';

import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)


export default async function fetchNewGame(prompt) {
    try {
        console.log(process.env.API_URL);
        const API_KEY = process.env.API_KEY;
        const API_URL = process.env.API_URL;

        if (!API_KEY || !API_URL) {
            console.error("API_KEY or API_URL is missing");
            return { error: "Internal Server Error: Missing API credentials" }; // Return an error response
        }

        console.log("API call initiated");

        // Prepare the data payload with the prompt
        const data = { message: prompt };

        // Call the external API
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        // Handle the case where the API response is not okay
        if (!response.ok) {
            console.error(`External API error: ${response.statusText}`);
            return { error: `Failed to fetch response: ${response.statusText}` }; // Return an error message
        }

        // Parse and return the JSON data from the response
        const apiResponseData = await response.json();
        return apiResponseData.text; // Return text field of response
    } catch (error) {
        console.error("Error during API call:", error.message);
        return { error: error.message }; // Return the error message instead of throwing
    }
}
