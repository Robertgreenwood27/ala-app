import React from 'react';
import Image from 'next/image';

const Paragraph = ({ children }) => <p className="mb-6">{children}</p>;

const AboutComponent = () => {
    return (
        <div className="p-4 md:p-8 w-full">
            {/* Heading Section */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8">About Me</h2>
            
            {/* Profile Image */}
            <div className="mb-4">
                <Image src="/business.png" alt="Accountant" width={160} height={160} />
            </div>

            {/* Description Paragraphs */}
            <div className="border-black border rounded-lg p-4 md:p-6 shadow-sm">
              <Paragraph>
                  In the intricate world of finance, I found my calling. My journey commenced with the simple goal of understanding numbers but evolved into a passion for providing clarity in the maze of financial records. Each ledger I encountered told a unique story, and I became the storyteller who brought order to the chaotic narratives.
              </Paragraph>

              <Paragraph>
                  What sets me apart is not just my expertise in numbers, but my commitment to personalizing every financial solution. I don&apos;t believe in a one-size-fits-all approach. Every individual, every business, has its own heartbeat, its own rhythm. My mission is to sync with that rhythm, to truly understand the underpinnings of your financial aspirations and challenges.
              </Paragraph>

              <Paragraph>
                  Over the years, I&apos;ve had the privilege of partnering with a diverse clientele. From small businesses grappling with their financial identities to seasoned enterprises seeking a fresh perspective, I&apos;ve donned multiple hats - sometimes the meticulous accountant, other times the insightful financial consultant. But at the core, my ethos remains unchanged: to empower my clients with clarity, confidence, and control over their financial destinies.
              </Paragraph>

              <Paragraph>
                  So, if you&apos;re on the lookout for someone who isn&apos;t just about the numbers but about forging meaningful financial journeys, you&apos;re in the right place. Welcome to a space where finance meets heart, strategy meets empathy, and numbers meet narratives.
              </Paragraph>
            </div>
        </div>
    );
};

export default AboutComponent;
