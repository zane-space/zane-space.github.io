import { GoogleGenAI } from "@google/genai";
import { EXPERIENCE, PROJECTS, SKILLS, SUMMARY, CONTACT } from '../constants';

const API_KEY = process.env.API_KEY || '';

// Construct a context string from the resume data
const RESUME_CONTEXT = `
You are an AI assistant for Zane Tsai. You are answering questions based on his resume.
Here is Zane's Resume Data:

Contact: ${JSON.stringify(CONTACT)}
Summary: ${SUMMARY}
Skills: ${JSON.stringify(SKILLS)}
Experience: ${JSON.stringify(EXPERIENCE)}
Projects: ${JSON.stringify(PROJECTS)}

Instructions:
1. Answer in a professional, friendly, and first-person persona (as if you are representing Zane or his digital avatar).
2. Keep answers concise and relevant to the user's question.
3. If asked about something not in the resume, politely state that you only have information based on his professional profile.
4. Highlight his expertise in Robotics, Automation, and Software Engineering.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!API_KEY) {
    return "I'm sorry, my AI brain is missing its API Key. Please configure the environment variable.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: RESUME_CONTEXT,
        thinkingConfig: { thinkingBudget: 0 } // Low latency preferred for chat
      }
    });

    return response.text || "I'm having trouble thinking of a response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
};