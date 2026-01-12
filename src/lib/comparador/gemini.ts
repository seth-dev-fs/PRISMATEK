// Gemini API client for PRISMATEK Comparador
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildPrompt } from './prompts';
import { Answer, ComparadorRecommendation } from './types';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not configured');
}

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

/**
 * Gets product recommendation from Gemini AI
 * @param categoria - Product category (telemoveis, headphones, etc)
 * @param respostas - User answers to questions
 * @returns Product recommendation with alternatives
 */
export async function getRecommendation(
  categoria: string,
  respostas: Answer[]
): Promise<ComparadorRecommendation> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = buildPrompt(categoria, respostas);

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    // Parse JSON response from Gemini
    let jsonString = responseText.trim();

    // Try to extract from ```json blocks
    const jsonMatch = jsonString.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/);
    if (jsonMatch && jsonMatch[1]) {
      jsonString = jsonMatch[1].trim();
    } else {
      // Try to extract just the JSON object
      const braceMatch = jsonString.match(/(\{[\s\S]*\})/);
      if (braceMatch && braceMatch[1]) {
        jsonString = braceMatch[1];
      }
    }

    // Clean up common JSON issues
    jsonString = jsonString
      .trim()
      .replace(/\}[^}]*$/, '}') // Remove trailing non-JSON after final }
      .replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas

    const recommendation: ComparadorRecommendation = JSON.parse(jsonString);

    // Validate structure
    if (!recommendation.main || !recommendation.main.productName) {
      throw new Error('Invalid recommendation structure from Gemini');
    }

    return recommendation;
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw new Error('Failed to generate recommendation. Please try again.');
  }
}
