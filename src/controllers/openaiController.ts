// controllers/openaiController.ts
import OpenAI from "openai";

import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Retrieve the API key from the environment variables
const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
    console.error('Error: OPENAI_API_KEY not found in the environment variables.');
    process.exit(1); // Exit the process if the API key is not found
}

const openai = new OpenAI({ apiKey });


async function chatToAndFro(messages: any) {
  try {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

    // Extract the relevant information from the completion
    const latestResponse = completion.choices[0].message.content;
    return latestResponse


  } catch (error) {
    // Log the error and return an error response
    console.error('Error:', error.message);
    return { response: 'An error occurred.', timeTaken: 0 };
  }
}

export { openai, chatToAndFro};

