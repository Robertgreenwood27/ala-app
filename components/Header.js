import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

const Header = () => {
  return (
    <header className="bg-black py-1 shadow">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="text-xl font-semibold text-white">
            {/* You can adjust the width and height of the logo here */}
            <Image src="/logo.png" alt="Logo" width={300} height={300} />
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-gray-300 hover:text-white text-base md:text-xl">About</a>
              </Link>
            </li>
            <li>
              <Link href="/services" legacyBehavior>
                <a className="text-gray-300 hover:text-white text-base md:text-xl">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" legacyBehavior>
                <a className="text-gray-300 hover:text-white text-base md:text-xl">Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-300 hover:text-white text-base md:text-xl">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
