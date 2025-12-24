import { useState, useRef, useEffect } from "react";
import { productContext } from "../data/productContext";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // 🔽 Auto-scroll to latest message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    setInput("");

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setLoading(true);

    const prompt = `
You are a customer support assistant.
Use ONLY the following product data to answer:

${productContext}

User: ${userText}

If the answer is not in the content above, reply:
"I can only answer questions related to our products."
    `;

    try {
      const response = await fetch(
        "https://green-field.onrender.com/api/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.reply || "No response received." },
      ]);
    } catch (err) {
      console.error("Chat Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Server error while generating response.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-green-800 text-white p-4 rounded-full shadow-xl"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white border shadow-xl rounded-lg flex flex-col">
          {/* Header */}
          <div className="bg-green-800 text-white p-3 flex justify-between items-center">
            <span>Product Assistant</span>
            <button onClick={() => setOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="p-3 h-80 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`my-2 ${
                  msg.sender === "user" ? "text-right" : ""
                }`}
              >
                <span
                  className={`inline-block px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-green-800 text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {loading && (
              <div className="text-left text-sm text-gray-500">
                Typing...
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-2 flex gap-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded p-2 text-sm"
              placeholder="Ask something..."
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-green-800 text-white px-3 rounded disabled:opacity-50"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
