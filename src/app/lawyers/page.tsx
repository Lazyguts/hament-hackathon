"use client";

import { createClient} from "@supabase/supabase-js";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const query = useSearchParams();
    const language = query.get("language");
    const state = query.get("State");
    const Type = query.get("Type");
    const [lawyers,setLawyers] = useState<any[]>([]);
    useEffect(()=>{
        const supabase = createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_ANON_KEY!
        );
        supabase.from("lawyer")
            .select("*")
            .contains("language",[language||""])
            .eq("state",state)
            .eq("type",Type)
            .then(({data})=>{
                setLawyers(data);
                console.log(data);
            })
    })
    return (
        <body>
            <main>
            </main>
        </body>
    )
}
