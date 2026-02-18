import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getRecyclingAdvice = async (userQuery: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `
      You are "EcoCyprus", a helpful and encouraging AI assistant dedicated to keeping Cyprus clean.
      
      Your goal is to help residents and tourists with:
      1. Correct recycling practices in Cyprus (e.g., Green Dot Cyprus system: PMD bags, Paper, Glass).
      2. Identifying how to dispose of specific items (batteries, electronics, garden waste).
      3. Encouraging anti-littering behavior and explaining the environmental impact on Cyprus's beaches and mountains.
      4. Suggesting locations for "Green Points" (recycling centers) if asked generally (you don't have real-time map access, but describe what they accept).

      Tone: Friendly, educational, clear, and concise.
      Formatting: Use short paragraphs and bullet points. Do not use markdown headers (Like # or ##).
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to connect to the eco-assistant.");
  }
};