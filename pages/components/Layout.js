import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-600">TipBoost</div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-purple-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-600">About</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-purple-600">Pricing</Link>
          <Link href="/login" className="text-gray-700 hover:text-purple-600">Login</Link>
        </div>
      </nav>

      <main className="p-6">
        {children}
      </main>
    </>
  );
}
