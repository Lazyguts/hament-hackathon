import { supabaseClient } from "@/lib/supabase";
import Link from "next/link";
import SheduleButton from "./ScheduleButton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await supabaseClient();
  const { data } = await supabase
    .from("lawyer")
    .select("*")
    .eq("id", Number(id))
    .single();

  return (
    <body className="bg-white50 xt-slate-300 font-sans">
      <main>
        <div className="container mx-auto p-4 md:p-8">
          <nav className="text-sm mb-8">
            <Link href="/" className="text-slate-400 hover:text-white">
              All Lawyers
            </Link>
            <span className="mx-2 text-slate-500">&gt;</span>
            <span className="text-white">{data.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1 bg-[#101929] p-8 rounded-lg shadow-lg self-start">
              <div className="flex flex-col items-center text-center">
                <img
                  className="w-32 h-32 rounded-full border-4 border-slate-500 mb-4"
                  src={data.profile}
                  alt={data.name}
                />
                <h1 className="text-3xl font-bold text-white">{data.name}</h1>
                <p className="text-slate-400 mb-6">
                  Career Navigator and Psychologist
                </p>

                <div className="text-left w-full space-y-3">
                  <p>
                    <strong className="font-semibold text-white">
                      Expertise:
                    </strong>{" "}
                    Career counselling, Psychological Counselling, De Addiction
                    counseling.
                  </p>
                  <p>
                    <strong className="font-semibold text-white">
                      Education:
                    </strong>{" "}
                    {/* {data.education.join(",")} */}
                  </p>
                  <p>
                    <strong className="font-semibold text-white">
                      Languages:
                    </strong>{" "}
                    {data.language.join(",")}
                  </p>
                  <p>
                    <strong className="font-semibold text-white">
                      Experience:
                    </strong>{" "}
                    {data.experience}+ years of experience
                  </p>
                  <p>
                    <strong className="font-semibold text-white">City:</strong>{" "}
                    {data.city} | {data.state}
                  </p>
                  <p>
                    <strong className="font-semibold text-white">
                      Session Mode:
                    </strong>{" "}
                    Online & Offline
                  </p>
                </div>

                <SheduleButton />
                <a
                  href="#"
                  className="text-slate-400 mt-3 text-sm hover:text-white"
                >
                  Get all your questions answered
                </a>
              </div>
            </aside>

            <main className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-slate-700 pb-2">
                  Highlights
                </h2>
                <ul className="space-y-3 list-disc list-inside text-slate-300">
                  <li>
                    She has 11 years of college teaching experience along with
                    10 years as independent psychologist.
                  </li>
                  <li>
                    She is a visiting psychologist at St. Peter's Academy,
                    Patiala.
                  </li>
                  <li>
                    Founder and counselling psychologist at RISE Clinic,
                    Patiala.
                  </li>
                  <li>
                    She provides training and internship for psychology post
                    graduate students.
                  </li>
                </ul>
              </section>

              <blockquote className="bg-[#111827] border-l-4 border-teal-400 p-6 rounded-lg italic">
                <p className="text-xl text-white">
                  "Do what you love and success will follow. Passion is the fuel
                  behind a successful career"
                </p>
                <cite className="block text-right text-slate-400 mt-4 not-italic">
                  — Dr. Jasmin Vij - Career navigator
                </cite>
              </blockquote>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-slate-700 pb-2">
                  Experience
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  A passionate psychologist and experienced trainer, her
                  expertise include soft skill, transaction analysis, emotional
                  regulation, work life balance. She conducts workshops,
                  seminars and faculty development programme for parents,
                  teachers and students at various institutes. She is expert in
                  diagnosing, handling and counselling to provide mental health
                  support to client's psychological struggles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4 border-b-2 border-slate-700 pb-2">
                  Therapeutic Techniques:
                </h2>
                <p className="mb-4">{data.name} has expertise in:</p>
                <ul className="custom-list grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  <li>ADHD</li>
                  <li>ADD</li>
                  <li>CBT</li>
                  <li>NLP</li>
                  <li>De Addiction</li>
                  <li>Transactional Analysis</li>
                  <li>Hypnotherapy</li>
                </ul>
              </section>
            </main>
          </div>
        </div>
      </main>
    </body>
  );
}
