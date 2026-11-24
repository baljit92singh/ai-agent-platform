
import { GoogleGenAI } from '@google/genai';
import { env } from '../config/env.js';

const ai = new GoogleGenAI({
  apiKey: env.geminiApiKey
});

export const generateAIResponse = async (prompt) => {
  const response = await ai.models.generateContent({
    model: env.geminiModel,
    contents: prompt
  });

  return response.text;
};
