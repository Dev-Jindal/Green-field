import express from "express";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  try {
    const { prompt } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",  // ✅ Correct model
    });

    const result = await model.generateContent(prompt);

    // ✅ FIXED: .text()
    const reply = result.response.text();

    return res.json({ reply });
  } catch (err) {
    console.error("❌ Gemini Error:", err);

    return res.status(500).json({
      reply: "Server error while generating response. Check server logs.",
    });
  }
});

app.listen(5000, () =>
  console.log("✅ Backend running on http://localhost:5000")
);
