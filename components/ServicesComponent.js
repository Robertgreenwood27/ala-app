import React from 'react';
import Image from 'next/image';

const ServiceItem = ({ src, alt, title, description }) => (
    <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="mb-4 md:mb-0">
            <Image src={src} alt={alt} width={80} height={80} />
        </div>
        <div className="ml-0 md:ml-4">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="">{description}</p>
        </div>
    </div>
);

const ServicesComponent = () => {
    return (
        <div className="px-8 py-16 w-full">
            {/* Header Section */}
            <h2 className="text-2xl font-semibold mb-4" data-aos="fade-up">
                Our Services
            </h2>
            <p className="mb-6 " data-aos="fade-up">
                From tangled financial records to streamlined systems, we offer a range of services tailored to meet your unique needs. Embrace clarity and confidence with our specialized accounting solutions.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                <ServiceItem 
                    src="/business.png" 
                    alt="Financial Cleanup" 
                    title="Financial Cleanup" 
                    description="Transform your disorganized financial records into systematic, coherent formats for clearer insights and better decision-making." 
                />

                <ServiceItem 
                    src="/business.png" 
                    alt="Theft and Loss Detection" 
                    title="Theft and Loss Detection" 
                    description="Unearth hidden discrepancies in your accounts. We identify suspicious patterns and provide you with secure solutions to safeguard your assets." 
                />

                <ServiceItem 
                    src="/business.png" 
                    alt="Digital Transition" 
                    title="Digital Transition" 
                    description="Migrate from paper-based systems to a digital environment, ensuring data accuracy and easy accessibility anytime, anywhere." 
                />

                <ServiceItem 
                    src="/business.png" 
                    alt="Financial Education" 
                    title="Financial Education" 
                    description="Equip yourself with financial literacy. Our sessions cover foundational concepts to advanced strategies, helping you take charge of your financial destiny." 
                />
            </div>
        </div>
    );
};

export default ServicesComponent;
