import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
  <h1 className="text-4xl font-semibold mb-4">
    Trusted Accounting Professional Bringing Order to Financial Chaos
  </h1>
  <p className="text-lg text-center mb-8">
    Specializing in cleanup services that provide clear financial benefits to clients.
  </p>
  {/* Image */}
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
