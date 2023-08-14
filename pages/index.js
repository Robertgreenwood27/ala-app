import React from 'react';
import IntroductionComponent from '../components/IntroductionComponent';
import ServicesComponent from '../components/ServicesComponent';
import AboutComponent from '../components/AboutComponent';
import BlogComponent from '../components/BlogComponent';
import ContactComponent from '../components/ContactComponent';
import FaqsComponent from '../components/FaqsComponent';
import PortfolioComponent from '../components/PortfolioComponent';
import TestimonialsComponent from '../components/TestimonialsComponent';

const SECTION_STYLES = "my-4 p-2 rounded shadow-lg";
const ODD_SECTION = "bg-gray-100";
const EVEN_SECTION = "bg-white shadow-2xl";

const Home = () => {

  const renderSection = (Component, isOdd = false) => (
    <div 
      className={`${SECTION_STYLES} ${isOdd ? ODD_SECTION : EVEN_SECTION}`} 
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
    </div>
  );
};

export default Home;
