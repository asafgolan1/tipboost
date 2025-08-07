export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">TipBoost</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#features" className="hover:underline">Features</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main id="home" className="flex-grow container mx-auto p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to TipBoost</h2>
        <p className="text-lg text-gray-700">
          A platform that helps content creators boost their tips by automating engagement and personalization.
        </p>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-100 text-gray-600 p-6 text-center">
        <div className="mb-2">
          Contact us at:{" "}
          <a href="mailto:support@tipboost.com" className="text-blue-600 hover:underline">
            support@tipboost.com
          </a>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <p className="mt-2 text-sm">&copy; {new Date().getFullYear()} TipBoost. All rights reserved.</p>
      </footer>
    </div>
  );
}


