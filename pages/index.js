import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>TipBoost – The Home for Content Creators</title>
        <meta name="description" content="A smart platform to boost content creators' success" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-purple-600">
          Welcome to TipBoost 🚀
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          A smart platform for content creators who want to maximize their income from their audience.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition">
          Try it now
        </button>
      </main>
    </>
  )
}
