"use client";

import { useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await response.json();

      if (data.output) {
        const geminiMessage = { text: data.output, sender: "gemini" };
        setMessages((prevMessages) => [...prevMessages, geminiMessage]);
      } else {
        const errorMessage = {
          text: data.error || "Something went wrong.",
          sender: "error",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      }
    } catch (error) {
      console.error(error);
      const errorMessage = {
        text: "Failed to connect to the server.",
        sender: "error",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <body>
      <main>
        <div className="flex flex-col h-screen w-full max-w-xl mx-auto p-4 bg-gray-100">
          <h1 className="text-2xl font-bold text-center mb-4">Gemini Chat</h1>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white rounded-lg shadow-inner">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-black self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="p-3 rounded-lg bg-gray-200 text-black self-start">
                Loading...
              </div>
            )}
          </div>
          <form onSubmit={handleSendMessage} className="mt-4 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Ask me anything..."
            />
            <button
              type="submit"
              disabled={loading}
              className="p-3 bg-blue-500 text-white rounded-r-lg font-semibold disabled:bg-blue-300"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </body>
  );
}
