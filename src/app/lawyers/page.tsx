"use client";

import { createClient } from "@supabase/supabase-js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "./Card";

type LawyerType = {
  id: number;
  name: string;
  state: string;
  city: string;
  type: string;
  language: string[];
  experience: number;
};

export default function Page() {
  const query = useSearchParams();
  const language = query.get("language");
  const state = query.get("State");
  const Type = query.get("Type");
  const [lawyers, setLawyers] = useState<LawyerType[]>([]);
  useEffect(() => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_ANON_KEY!
    );
    supabase
      .from("lawyer")
      .select("*")
      .contains("language", [language || ""])
      .eq("state", state)
      .eq("type", Type)
      .then(({ data }) => {
        setLawyers(data as LawyerType[]);
      });
  });
  return (
    <body>
      <main>
        <section className="bg-white rounded-lg p-6 shadow-md border border-gray-200 min-h-[200px]">
          <h3 className="align-center text-2xl font-bold mb-4">Avaliable lawyers</h3>
          <div className="space-y-3">
            <div>
              <span>
                Talk to our expert to understand your legal problem and the next
                steps.
              </span>
            </div>
            <div
              id="slider"
              className="flex overflow-x-auto gap-8 scroll-smooth scrollbar-hide"
            >
              {lawyers.map((law) => (
                <Card
                  id={law.id}
                  name={law.name}
                  place={law.state}
                  languages={law.language.length}
                  experience={law.experience}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}
