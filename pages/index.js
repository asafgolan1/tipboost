import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <Navbar />
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <h1 className="text-5xl font-bold mb-6">Boost your tips with AI automation</h1>
        <p className="text-lg text-gray-700 max-w-xl mb-8">
          TipBoost helps content creators automate messages and increase engagement with fans effortlessly.
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-2xl text-lg hover:bg-gray-800 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}

