import React from 'react';
import Image from 'next/image'; // Import the Image component

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      {/* Profile Picture */}
      <div className="mb-4">
        <Image src="/business.png" alt="Accountant" width={200} height={200} />
      </div>
      <h1 className="text-4xl font-semibold mb-4">
        Trusted Accounting Professional Bringing Order to Financial Chaos
      </h1>
      <p className="text-lg text-center mb-8">
        Welcome to "Your Financial Cleanup," your trusted partner in achieving financial clarity and stability.
        Our dedicated team of skilled professionals specializes in providing top-notch cleanup services that
        bring clear and tangible financial benefits to our valued clients.
      </p>
      <p className="text-lg text-center mb-8">
        With years of experience and a proven track record, we are committed to helping individuals and businesses
        organize their financial records, streamline processes, and unlock new opportunities for growth.
      </p>
      {/* Call to Action */}
      <a
        href="/about"
        className="text-blue-500 hover:text-blue-600 text-lg font-semibold transition duration-300"
      >
        Learn More &rarr;
      </a>
    </div>
  );
};

export default Home;
