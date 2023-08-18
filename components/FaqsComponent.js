import React, { useState } from 'react';

const FAQ = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='w-full border-b-2 border-gray-200 py-4'>
            <dt
                className="text-lg md:text-xl font-medium mb-2 cursor-pointer flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <span className="transform transition-transform duration-300" style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'}}>&#9660;</span>
            </dt>
            {isOpen && <dd className="text-gray-700 pl-2">{answer}</dd>}
        </div>
    );
};

const FaqsComponent = () => {
    const faqs = [
        {
            question: "What is financial cleanup?",
            answer: "Financial cleanup involves the process of sorting, organizing, and streamlining messy financial records. It ensures that your financial records are up-to-date, accurate, and easy to comprehend."
        },
        {
            question: "Why is financial cleanup important for businesses?",
            answer: "Financial cleanup is crucial because it helps in accurate financial reporting. A clear financial record can help businesses identify areas of wastage, uncover financial discrepancies, and make informed decisions. Moreover, it eases the tax preparation process and ensures compliance."
        },
        {
            question: "How often should I have a financial cleanup?",
            answer: "The frequency of financial cleanups depends on the nature and scale of your business. For rapidly growing businesses or those with complex financials, quarterly cleanups might be suitable. For others, a semi-annual or annual cleanup may suffice."
        },
        {
            question: "How do you detect patterns of loss or theft?",
            answer: "We employ a combination of modern financial tools, analytics, and experienced scrutiny to detect inconsistencies in your financial records. We'll look into irregular transactions, examine cash flow patterns, and compare your records against industry benchmarks."
        },
        {
            question: "Can you help in digitizing physical financial records?",
            answer: "Absolutely! Digitizing your physical financial records is a crucial step in modern financial management. We'll help you transfer your physical documents into digital formats and even assist in setting up cloud storage solutions, ensuring accessibility and security."
        }
    ];

    return (
        <div className="p-4 md:p-8 w-full bg-gray-100">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Frequently Asked Questions</h2>
            
            <dl className="space-y-6 md:space-y-8 bg-white p-4 rounded-md shadow-md">
                {faqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                ))}
            </dl>
        </div>
    );
};

export default FaqsComponent;
