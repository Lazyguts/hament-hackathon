import Link from "next/link";

export default function Card({
  name,
  place,
  languages,
  experience,
}: {
  name: string;
  place: string;
  languages: number;
  experience:string;
}) {
  return (
    <div className="flex-none w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="text-center text-gray-400 mb-4">Profile Picture</div>
      <h3 className="text-xl font-bold text-gray-800 text-center">{name}</h3>
      <p className="text-gray-500 text-center mb-6">{place}</p>
      <div className="flex justify-around items-center mb-6">
        <div>
          <span className="text-2xl font-bold">{experience}+</span>
          <p>Experience</p>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold">3</span>
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
          <span className="text-2xl font-bold">{languages}</span>
          <p>Languages</p>
        </div>
      </div>
      <p className="bg-gray-50 p-3 rounded-lg mb-6">
        <strong>Available:</strong> On Video Call
      </p>
      <Link
        href={`/profile/${name}`}
        className="w-full block text-center bg-white text-red-600 border border-red-600 rounded-lg py-2 font-semibold hover:bg-red-600 hover:text-white transition"
      >
        View Profile
      </Link>
    </div>
  );
}
