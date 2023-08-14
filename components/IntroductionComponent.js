import React from 'react';

const IntroductionComponent = () => {
  return (
    <div className="text-center">
      <div className="bg-black p-0 md:p-0 mb-6 md:mb-10 relative">
        <img
          src="/logo.png"
          alt="Accounting & Business Solutions"
          className="h-32 mx-auto md:h-64 w-auto transition duration-300 transform hover:scale-105"
        />
      </div>
      <h1 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">The Expert Behind Your Financial Clarity</h1>
      <p className="text-base md:text-lg text-center mb-4" data-aos="fade-up">Crafting Systems for Financial Peace of Mind.</p>
      <p className="text-sm md:text-base text-center mb-6" data-aos="fade-up">
        Dive into a seamless financial journey with an independent accountant who&apos;s more than just numbers. Embrace an experience where chaotic financial landscapes are transformed into clear, digitized systems.
      </p>
      <p className="text-sm md:text-base text-center mb-6" data-aos="fade-up">
        Harnessing years of specialized experience, I delve deep into the intricate maze of your finances, sorting, organizing, and breathing life into them. Whether it&apos;s pinpointing patterns of loss, detecting inconsistencies, or unearthing potential theft, every stone is turned, every nook is examined. 
      </p>
      <p className="text-sm md:text-base text-center mb-6" data-aos="fade-up">
        But, it doesn&apos;t end there. My mission is to empower you. Beyond handing back a pristine financial system, I strive to impart knowledge, tools, and strategies. The result? You gain the confidence and capability to steer your finances towards a prosperous tomorrow.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Get Started
      </button>
    </div>
  );
};

export default IntroductionComponent;
