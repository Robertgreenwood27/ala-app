import React from 'react';
import Image from 'next/image';

const Testimonial = ({ imagePath, altText, testimonialText, author }) => (
    <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="mb-4 md:mb-0 md:mr-6 w-24 h-24 md:w-auto md:h-auto">
            <Image src={imagePath} alt={altText} width={80} height={80} />
        </div>
        <div>
            <p className="text-base md:text-lg">
                "{testimonialText}"
            </p>
            <p className="mt-2 font-semibold text-sm md:text-base">
                - {author}
            </p>
        </div>
    </div>
);

const TestimonialsComponent = () => {
    const testimonials = [
        {
            imagePath: "/business.png",
            altText: "Client 1",
            testimonialText: "I was overwhelmed with my business finances until I got in touch with [Business Name]. They streamlined everything, and now I finally feel in control. Highly recommended!",
            author: "Jane D."
        },
        {
            imagePath: "/business.png",
            altText: "Client 2",
            testimonialText: "Their professionalism and expertise are unmatched. The clarity they brought to our financial system was a game-changer for our business.",
            author: "Alex B."
        },
        {
            imagePath: "/business.png",
            altText: "Client 3",
            testimonialText: "I never understood the depth of my financial mismanagement until I consulted with [Business Name]. Their meticulous approach saved me from a potential crisis.",
            author: "Chris M."
        }
    ];

    return (
        <div className="p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">What Our Clients Say</h2>
            
            <div>
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsComponent;
