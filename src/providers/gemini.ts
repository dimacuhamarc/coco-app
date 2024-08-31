import { GoogleGenerativeAI } from "@google/generative-ai";

const geminiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string
const genAI = new GoogleGenerativeAI(geminiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const prompt = "make a random story about the future of journal/diary apps with ai. Include the following keywords: journaling, mood tracking, personalized advice, well-being, mental health, self-improvement, and self-care. 3-5 sentences";
var text = null;
// const myFunc = async () => {
//   const result = await model.generateContent(prompt);
//   if (result) {
//     console.log(result?.response?.candidates[0]?.content.parts[0].text);
//     text = result?.response?.candidates[0]?.content.parts[0].text
//   }
// }