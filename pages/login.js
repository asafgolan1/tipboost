import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About – TipBoost</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">About TipBoost</h1>
        <p className="text-gray-700 text-center max-w-md">
          TipBoost is a smart platform that helps content creators grow their income and engage with their audience in powerful ways.
        </p>
      </main>
    </>
  )
}
