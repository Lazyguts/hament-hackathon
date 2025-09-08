"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

export default function ChatBox(){
    const [question,setQuestion] = useState("");
    const router = useRouter();
    function handleChange(e: KeyboardEvent<HTMLInputElement>) {
      if(e.key == "Enter"){
        router.push(`/chat/${question}`);
      }
    }
    return (
        <section className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h2 className="align-center text-2xl font-bold mb-4">Nay.ai</h2>
            <div className="relative mb-4">
                <input
                    type="text"
                    placeholder="Ask anything to Nay.ai"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    value={question}
                    onChange={(e)=>setQuestion(e.target.value)}
                    onKeyDown={(e)=>handleChange(e)}
                />
            </div>
            <div className="flex justify-between items-start">
                <div className="flex items-center justify-center w-32 h-10 rounded-2xl font-semibold text-black bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hover:bg-black/20 hover:shadow-xl transition-all duration-300">
                    <h3 className="font-semibold text-black-500">History</h3>
                </div>
                <div className="flex flex-col items-center ml-4">
                    <span className="flex items-center justify-center w-32 h-10 rounded-2xl font-semibold text-black bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hover:bg-black/20 hover:shadow-xl transition-all duration-300">
                        Document
                    </span>
                </div>
            </div>
        </section>
    );
}
