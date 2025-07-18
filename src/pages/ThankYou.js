import { Link } from "react-router-dom";

export default function ThankYou() {
  return (
    <>
      <section className="flex items-center justify-center flex-col mt-10 px-5">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-3 text-gray-800 lg:mb-8">
          Thank You!
        </h1>
        <p className="text-xl mb-10 text-center">
          Thank you for your generous donation!
        </p>
        <button className="bg-blue-500 mb-5 text-white font-bold py-2 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-150 hover:ring-4 hover:ring-blue-400">
          <Link to="/">Back to Homepage</Link>
        </button>
      </section>
    </>
  );
}
