import React from 'react';
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className = "px-6 md:px-0 mt-12 text-[#005f99] py-8 max-w-[1000px] mx-auto border-t border-[#007acc] pt-4 flex justify-between items-center bg-[#e6f7ff]">

            <h1 className = "text-2xl font-bold">Haruya Fujii</h1>

            <div className = "flex space-x-6 mt-4">
                <a href = "https://github.com/HaruyaFujii" className = "hover:text-gray-300">
                    <FaGithub size = {24} />
                </a>
                <a href = "https://x.com/haruya_public?s=21" className = "hover:text-blue-400">
                    <FaTwitter size = {24} />
                </a>
                <a href = "https://www.instagram.com/_1rhy121?igsh=dXdoeXU4cTh4NDNr&utm_source=qr" className = "hover:text-pink-400">
                    <FaInstagram size = {24} />
                </a>
            </div>
        </div>
    )
}

export default Footer;