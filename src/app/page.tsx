import Consultants from "./Consultants";
import FindLawyer from "./FindLawyer";
import Navbar from "./Navbar";

export default function Home() {
  return (
      <body className="bg-gradient-to-b from-orange-300 via-white to-green-200 text-black font-sans">
    
      <div className="container mx-auto p-4 md:p-8">
       <Navbar/>

        <main className="flex flex-col gap-8">
          <section className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
            <h2 className="align-center text-2xl font-bold mb-4">Nay.ai</h2>
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Ask anything to Nay.ai"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
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
