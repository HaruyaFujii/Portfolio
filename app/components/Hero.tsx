"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import mee from "../assets/mee.jpg";
import balloon from "../assets/balloon.png";

const Hero = () => {
    return (
        <div className="hero-bg py-24 relative z-10 overflow-clip" id="portfolio">
            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#e6f7ff_80%,#d4f1f9)]"></div>

            <div className="relative text-center">
                <h1 className="text-[#007acc] text-8xl font-bold">Hi, I am</h1>
                <h1 className="text-[#005f99] text-8xl font-bold">Haruya Fujii</h1>
                <p className="text-[#333] text-xl mt-4 max-w-[600px] mx-auto">
                    I am a student of Information Science and Technology, aiming to become an engineer. I'd like to improve my skills!
                </p>
                <Image
                    src={mee}
                    alt="profile picture"
                    className="h-auto w-auto max-w-[380px] mx-auto mt-8 rounded-full border-4 border-[#007acc]"
                />
            </div>

            {/* Motion Elements */}
            <motion.div
                className="hidden md:block absolute left-[280px] top-[170px]"
                drag
            >
                <Image
                    src={balloon}
                    alt="balloon"
                    className="h-[200px] w-auto"
                    draggable="false"
                />

            </motion.div>

            <motion.div
                className="hidden md:block absolute right-[220px] top-[20px]"
                drag
            >
                <Image
                    src={balloon}
                    alt="balloon"
                    className="h-[200px] w-auto"
                    draggable="false"
                />

            </motion.div>
        </div>
    )
}

export default Hero;