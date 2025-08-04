import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>TipBoost – Smart platform for creators</title>
        <meta name="description" content="Smart platform to help content creators boost their revenue" />
      </Head>

      {/* Navigation */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-600">TipBoost</div>
        <nav className="space-x-4 hidden md:block">
          <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">About</a>
          <a href="#" className="text-gray-700 hover:text-purple-600">Login</a>
          <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition">Sign Up</a>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-purple-600">
          Welcome to TipBoost 🚀
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          A smart platform for creators who want to maximize their revenue
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition">
          Try it now
        </button>
      </main>
    </>
  )
}
