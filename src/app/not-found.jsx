import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-lg text-gray-700 mt-4">Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <button className="mt-6 inline-block px-6 py-2 bg-amber-500 text-white rounded-md text-lg hover:bg-amber-600 transition duration-300">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
    );
};

export default NotFoundPage;