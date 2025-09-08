export default function Navbar() {
  return (
    <header className="mb-10 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <span className="text-sm font-medium text-gray-700">
            Login | Signup
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800">NAYASARTHI</h1>
      </div>

      <nav className="flex flex-wrap justify-center gap-3">
        <a
          href="#"
          className="flex items-center justify-center w-32 h-10 rounded-2xl font-semibold text-black bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hover:bg-black/20 hover:shadow-xl transition-all duration-300"
        >
          CIVIL
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-32 h-10 rounded-2xl font-semibold text-black bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hover:bg-black/20 hover:shadow-xl transition-all duration-300"
        >
          CRIMINAL
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-32 h-10 rounded-2xl font-semibold text-black bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hover:bg-black/20 hover:shadow-xl transition-all duration-300"
        >
          FAMILY
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-32 h-10 rounded-2xl font-semibold text-black bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hover:bg-black/20 hover:shadow-xl transition-all duration-300"
        >
          PROBATE
        </a>
        <a
          href="#"
          className="flex items-center justify-center w-32 h-10 rounded-2xl font-semibold text-black bg-white/10 backdrop-blur-md border border-white/30 shadow-lg hover:bg-black/20 hover:shadow-xl transition-all duration-300"
        >
          ADMIN
        </a>
      </nav>
    </header>
  );
}
