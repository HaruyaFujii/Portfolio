"use client";
import React from 'react';
import Image from 'next/image';
import book from "../assets/book.png";
import pc from "../assets/pc.png";
import card from "../assets/card.png";
import stress from "../assets/stressfigure.png";

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto bg-[#e6f7ff] text-[#005f99] p-8 rounded-lg" id="about">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">About Me</h1>

            <div className="px-4 md:px-6 grid grid-cols-1 md:grid-cols-8 gap-6 place-items-center">
                {/* School Section */}
                <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-col md:flex-row p-6 relative z-10">
                        <Image src={book} alt="book" className="w-auto h-[100px] md:h-[130px] object-contain mb-4 md:mb-0 md:mr-6" />
                        <div className="flex flex-col text-center md:text-left">
                            <h2 className="text-xl md:text-2xl font-bold text-[#005e99]">School</h2>
                            <p className="text-sm md:text-lg text-black/90 mt-2">
                                I am enrolled in the Department of Information Engineering at Osaka Metropolitan University.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Research Section */}
                <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-col md:flex-row p-6 relative z-10">
                        <Image src={stress} alt="stress" className="w-auto h-[40px] md:h-[60px] object-contain md:mt-8 mb-4 md:mb-0 md:mr-6" />
                        <div className="flex flex-col text-center md:text-left">
                            <h2 className="text-xl md:text-2xl font-bold text-[#005e99]">My Research</h2>
                            <p className="text-sm md:text-lg text-black/90 mt-2">
                                I am exploring ways to quantify stress levels to avoid long-term effects of stress.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-col md:flex-row p-6 relative z-10">
                        <Image src={card} alt="card" className="w-auto h-[100px] md:h-[130px] object-contain mb-4 md:mb-0 md:mr-6" />
                        <div className="flex flex-col text-center md:text-left">
                            <h2 className="text-xl md:text-2xl font-bold text-[#005e99]">Experience</h2>
                            <p className="text-sm md:text-lg text-black/90 mt-2">
                                I attended Augmented Humans 2025 to make poster presentations.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Technical Skills Section */}
                <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400 opacity-30 animate-gradient-xy"></div>
                    <div className="flex flex-col md:flex-row p-6 relative z-10">
                        <Image src={pc} alt="pc" className="w-auto h-[100px] md:h-[130px] object-contain mb-4 md:mb-0 md:mr-6" />
                        <div className="flex flex-col text-center md:text-left">
                            <h2 className="text-xl md:text-2xl font-bold text-[#005e99]">Technical Skills</h2>
                            <p className="text-sm md:text-lg text-black/90 mt-2">
                                I studied C, Python, and TypeScript. I made this portfolio using TypeScript, React, Next.js, and Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;