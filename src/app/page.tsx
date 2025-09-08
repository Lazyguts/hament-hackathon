import ChatBox from "./home/Chat";
import Consultants from "./home/Consultants";
import FindLawyer from "./home/FindLawyer";
import Navbar from "./home/Navbar";

export default function Home() {
  return (
      <body className="bg-gradient-to-b from-orange-300 via-white to-green-200 text-black font-sans">
    
      <div className="container mx-auto p-4 md:p-8">
       <Navbar/>

        <main className="flex flex-col gap-8">
          <ChatBox/>

          <Consultants/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-3">Our Impact</h2>
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded"></div>
                <div className="w-full h-4 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
              </div>
            </section>
            <section className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h2 className="text-2xl font-semibold mb-3">Our Ambition</h2>
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded"></div>
                <div className="w-full h-4 bg-gray-200 rounded"></div>
                <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
              </div>
            </section>
          </div>
          <FindLawyer/>
        </main>

        <footer className="mt-16 pt-8 border-t border-gray-300 text-sm text-gray-600">
          <div className="flex flex-wrap justify-center md:justify-between gap-4 text-center">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <a href="#" className="hover:underline">
                Contact
              </a>
              <a href="#" className="hover:underline">
                Email
              </a>
              <a href="#" className="hover:underline">
                Helpline
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <a href="#" className="hover:underline">
                Address
              </a>
              <a href="#" className="hover:underline">
                Registration Info
              </a>
            </div>
          </div>
        </footer>
      </div>
    </body>
  );
}
