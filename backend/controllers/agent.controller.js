
import { generateAIResponse } from '../services/gemini.service.js';

export const chatWithAgent = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Prompt is required'
      });
    }

    const result = await generateAIResponse(prompt.trim());

    return res.status(200).json({
      success: true,
      result
    });

  } catch (error) {
    console.error('Gemini Error:', error.message);

    return res.status(500).json({
      success: false,
      message: 'AI response generation failed',
      error: error.message
    });
  }
};
