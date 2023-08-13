import React from 'react';
import Image from 'next/image';

const Paragraph = ({ children }) => <p className="mb-6">{children}</p>;

const AboutComponent = () => {
    return (
        <div className="p-8">
            {/* Heading Section */}
            <h2 className="text-2xl font-semibold mb-4">About Me</h2>
            
            {/* Profile Image */}
            <div className="mb-4">
                <Image src="/business.png" alt="Accountant" width={160} height={160} />
            </div>

            {/* Description Paragraphs */}
            <Paragraph>
                In the intricate world of finance, I found my calling. My journey commenced with the simple goal of understanding numbers but evolved into a passion for providing clarity in the maze of financial records. Each ledger I encountered told a unique story, and I became the storyteller who brought order to the chaotic narratives.
            </Paragraph>

            <Paragraph>
                What sets me apart is not just my expertise in numbers, but my commitment to personalizing every financial solution. I don't believe in a one-size-fits-all approach. Every individual, every business, has its own heartbeat, its own rhythm. My mission is to sync with that rhythm, to truly understand the underpinnings of your financial aspirations and challenges.
            </Paragraph>

            <Paragraph>
                Over the years, I've had the privilege of partnering with a diverse clientele. From small businesses grappling with their financial identities to seasoned enterprises seeking a fresh perspective, I've donned multiple hats - sometimes the meticulous accountant, other times the insightful financial consultant. But at the core, my ethos remains unchanged: to empower my clients with clarity, confidence, and control over their financial destinies.
            </Paragraph>

            <Paragraph>
                So, if you're on the lookout for someone who isn't just about the numbers but about forging meaningful financial journeys, you're in the right place. Welcome to a space where finance meets heart, strategy meets empathy, and numbers meet narratives.
            </Paragraph>

        </div>
    );
};

export default AboutComponent;
