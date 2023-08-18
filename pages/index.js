import React, { useEffect } from 'react';
import AOS from 'aos';
import IntroductionComponent from '../components/IntroductionComponent';
import ServicesComponent from '../components/ServicesComponent';
import AboutComponent from '../components/AboutComponent';
import BlogComponent from '../components/BlogComponent';
import ContactComponent from '../components/ContactComponent';
import FaqsComponent from '../components/FaqsComponent';
import PortfolioComponent from '../components/PortfolioComponent';
import TestimonialsComponent from '../components/TestimonialsComponent';

const SECTION_STYLES = "my-2 p-2 rounded shadow-lg w-full";
const ODD_SECTION = "bg-gradient-to-r from-gray-100 via-gray-200 to-white";
const EVEN_SECTION = "bg-gradient-to-r from-white via-gray-100 to-gray-200";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderSection = (Component, isOdd = false) => (
    <div 
      className={`${SECTION_STYLES} ${isOdd ? ODD_SECTION : EVEN_SECTION}`} 
      data-aos="fade-up"
      data-aos-delay="50"
    >
      <Component />
    </div>
  );

  return (
    <div className="flex flex-col items-center p-0 md:p-8 w-full">
      {renderSection(IntroductionComponent, true)}
      {renderSection(ServicesComponent)}
      {renderSection(AboutComponent, true)}
      {renderSection(PortfolioComponent)}
      {renderSection(TestimonialsComponent, true)}
      {renderSection(FaqsComponent)}
      {renderSection(BlogComponent, true)}
      {renderSection(ContactComponent)}
      <button
        onClick={scrollToTop}
        className="p-4 bg-green-700 hover:bg-green-900 text-white rounded-full shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 animate-pulse"
      >
        &uarr;
      </button>
    </div>
  );
};

export default Home;
