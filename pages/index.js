import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import IntroductionComponent from '../components/IntroductionComponent';
import ServicesComponent from '../components/ServicesComponent';
import AboutComponent from '../components/AboutComponent';
import BlogComponent from '../components/BlogComponent';
import ContactComponent from '../components/ContactComponent';
import FaqsComponent from '../components/FaqsComponent';
import PortfolioComponent from '../components/PortfolioComponent';
import TestimonialsComponent from '../components/TestimonialsComponent';

const AOS = dynamic(() => import('aos'), { ssr: false });

const SECTION_STYLES = "my-4 p-2 rounded shadow-lg";
const HOVER_EFFECT = "transform hover:scale-105 transition-transform duration-300";
const ODD_SECTION = "bg-gray-100";
const EVEN_SECTION = "bg-white shadow-2xl";

const Home = () => {
  useEffect(() => {
    const AOS = require('aos');
    AOS.init({
      duration: 800,
      once: true,
    });
    window.scrollTo(0, 0);
}, []);


  const renderSection = (Component, animation, isOdd = false) => (
    <div 
      className={`${SECTION_STYLES} ${isOdd ? ODD_SECTION : EVEN_SECTION} ${HOVER_EFFECT}`} 
      data-aos={animation}
    >
      <Component />
    </div>
  );

  return (
    <div className="flex flex-col items-center p-0 md:p-8 w-full">
      {renderSection(IntroductionComponent, "fade-up")}
      {renderSection(ServicesComponent, "fade-up")}
      {renderSection(AboutComponent, "fade-right", true)}
      {renderSection(PortfolioComponent, "fade-down")}
      {renderSection(TestimonialsComponent, "fade-right", true)}
      {renderSection(FaqsComponent, "fade-up")}
      {renderSection(BlogComponent, "fade-left", true)}
      {renderSection(ContactComponent, "fade-right")}
    </div>
  );
};

export default Home;
