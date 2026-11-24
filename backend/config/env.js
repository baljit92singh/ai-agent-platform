import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 3000,
  geminiApiKey: process.env.GEMINI_API_KEY,
  geminiModel: process.env.GEMINI_MODEL
};

if (!env.geminiApiKey) {
  throw new Error('GEMINI_API_KEY is missing');
}

if (!env.geminiModel) {
  throw new Error('GEMINI_MODEL is missing');
}