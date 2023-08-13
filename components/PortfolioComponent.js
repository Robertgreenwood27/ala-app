import React from 'react';

const Project = ({ title, description }) => (
    <div className="border rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <h3 className="text-xl font-medium mb-3 md:mb-4">{title}</h3>
        <p>{description}</p>
    </div>
);

const PortfolioComponent = () => {
    const projects = [
        {
            title: "Tech Titan Corp.",
            description: "Transformed a decade's worth of disorganized financial records into a streamlined, digital system. Identified over $50,000 in unnoticed operational wastage, leading to significant savings."
        },
        {
            title: "EcoSolutions Ltd.",
            description: "Overhauled the company's financial processes, revealing patterns of inefficiency in supply chain management. The insights provided led to a 15% increase in quarterly profits."
        },
        {
            title: "Cityscape Realtors",
            description: "Successfully transitioned the company from paper-based bookkeeping to a modern cloud-based accounting system. Streamlined invoicing, leading to faster client payments and improved cash flow."
        },
        {
            title: "HealthFirst Clinics",
            description: "Detected and resolved billing discrepancies that recovered over $30,000 in unpaid services. The new billing system put in place reduced future discrepancies by over 90%."
        }
    ];

    return (
        <div className="p-4 md:p-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">Portfolio</h2>
            <div className="space-y-6 md:space-y-8">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default PortfolioComponent;
