"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const navLinks = [
    { title: "Portfolio", path: "#portfolio" },
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Skills", path: "#skills" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            }
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15,
            }
        }

    }

    return (
        <div className = "bg-[#e6f7ff] text-[#005f99] pt-6 shadow-md">
            <div className = "max-w-[800px] mx-auto hidden md:flex justify-center px-4 py-2">
                <ul className = "flex flex-row p-4 space-x-8 text-sm md:text-base lg:text-lg">
                    {navLinks.map((link, index) => (
                        <li key = {index}>
                            <Link href = {link.path}>
                                <p　className="hover:text-[#007acc]">{link.title}</p>
                            </Link>
                        </li>
                    ))}

                    <li>
                        <a href = "#contact" className = "group">
                            <span className = "text-lg font-semibold text-[#005f99] cursor-pointer hover:text-[#007acc]">Contact Me</span>
                            {/* <div className = "relative h-2">
                                <div className = "absolute w-2/3 h-1 transition-all duration-300 ease-out bg-orange-400 rounded-full group-hover:w-full">
                                </div>
                                <div className = "mt-1 absolute w-1/3 h-1 transition-all duration-300 ease-out bg-orange-600 rounded-full group-hover:w-full">
                                </div>
                            </div> */}
                        </a>
                    </li>
                </ul>
            </div>

            <div onClick = {toggleNav} className = "md:hidden absolute top-5 right-5 border rounded text-[#005f99] border-[#005f99] p-2 z-50">
                {nav ? <AiOutlineClose size = {30}/> : <AiOutlineMenu size = {30}/>}
            </div>

            <motion.div
                initial = {false}
                animate = {nav ? "open" : "closed"}
                variants = {menuVariants}
                className = "fixed left-0 top-0 w-full z-40 bg-[#e6f7ff]"
            >
                <ul className = "text-4xl font-semibold my-24 text-center space-y-8">
                    {navLinks.map((link, index) => (
                        <li key = {index}>
                            <Link href = {link.path} onClick = {closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    
                    {/* ✅ Contact Me を追加 */}
                    <li>
                        <a href="#contact" onClick={closeNav} className="group">
                            <p className="font-semibold">Contact Me</p>
                        </a>
                    </li>
                </ul>

            </motion.div>
        </div>
    )
}


export default Navbar;
