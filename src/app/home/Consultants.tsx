import { supabaseClient } from "@/lib/supabase";
import Card from "./Card";

export default async function Consultants() {
    const supabase = await supabaseClient();
    const { data } = await supabase.from("consultants").select("*");
    
    return (
      <section className="bg-white rounded-lg p-6 shadow-md border border-gray-200 min-h-[200px]">
        <h3 className="align-center text-2xl font-bold mb-4">Naya-mitra</h3>
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
            {data?.map((c) => (
              <Card
                key={c.name}
                name={c.name}
                place={c.city}
                languages={c.languages}
                experience={c.experience}
              />
            ))}
          </div>
        </div>
      </section>
    );
}
