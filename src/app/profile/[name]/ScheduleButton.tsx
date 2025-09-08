"use client";

import sendDiscordMessage from "@/lib/discord";

export default function SheduleButton(){
    async function bookMeeting() {
      await sendDiscordMessage(`Hament has booked a meeting with you`);
    }
    return (
      <button
        className="w-full bg-[#9b5149] text-white py-3 rounded-lg mt-8 font-bold hover:bg-[#8a4841] transition-colors"
        onClick={bookMeeting}
      >
        Book Appointment
      </button>
    );
}