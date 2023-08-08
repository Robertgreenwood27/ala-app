// app/components/Header.js
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white py-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" legacyBehavior>
          <a className="text-xl font-semibold text-gray-800">
            Your Financial Cleanup
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">About</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-600 hover:text-gray-800">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
