import { useState } from "react";
import { productContext } from "../data/productContext";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);

    const prompt = `
You are a customer support assistant.
Use ONLY the following product data to answer:

${productContext}

User: ${text}

If the answer is not in the content above, reply:
"I can only answer questions related to our products."
    `;

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error while generating response." },
      ]);
    }
  };

  return (
    <div>
      {/* Floating Chat Button */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 bg-green-800 text-white p-4 rounded-full shadow-xl chatbot-fixed"
          onClick={() => setOpen(true)}
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white border shadow-xl rounded-lg chatbot-fixed">
          <div className="bg-green-800 text-white p-3 flex justify-between">
            <span>Product Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="p-3 h-80 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-2 ${msg.sender === "user" ? "text-right" : ""}`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-green-800 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </div>

          <div className="p-2 flex gap-2 border-t">
            <input
              id="msg"
              className="flex-1 border rounded p-2"
              placeholder="Ask something..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  sendMessage(e.target.value);
                  e.target.value = "";
                }
              }}
            />

            <button
              className="bg-green-800 text-white px-3 rounded"
              onClick={() => {
                const input = document.getElementById("msg");
                if (input.value.trim()) {
                  sendMessage(input.value);
                  input.value = "";
                }
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
