import React from 'react';
import Image from 'next/image';
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contact = () => {
    return (
        <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-[#005f99] p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 bg-[#e6f7ff]" id="contact">
            {/* 左側: 連絡先情報 */}
            <div className="flex justify-center items-center">
                <ul className="space-y-4">
                    <li className="flex items-center">
                        <Image src={phone} alt="phone" className="h-[110px] w-auto mr-6" />
                        <p className="text-xl">+81 080 2441 9473</p>
                    </li>
                    <li className="flex items-center">
                        <Image src={mail} alt="mail" className="h-[110px] w-auto mr-6" />
                        <p className="text-xl">sq22612e@st.omu.ac.jp</p>
                    </li>
                </ul>
            </div>

            {/* 右側: メッセージフォーム */}
            <div className="bg-white p-6 rounded-xl max-w-[550px] shadow-md">
                <h2 className="text-4xl font-bold text-[#007acc] mb-4">Let&apos;s connect</h2>
                <p className="text-[#333] mb-6">Send me a message and let&apos;s schedule a call!</p>
                <form className="space-y-4" action="https://getform.io/f/bejrdoka" method="POST">
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="first_name"
                            className="bg-[#f0f8ff] rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="last_name"
                            className="bg-[#f0f8ff] rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Last Name"
                        />
                        <input
                            type="email"
                            name="email"
                            className="bg-[#f0f8ff] rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Email"
                        />
                        <input
                            type="phone"
                            name="phone"
                            className="bg-[#f0f8ff] rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Phone"
                        />
                    </div>
                    <textarea
                        name="message"
                        className="bg-[#f0f8ff] w-full rounded-xl p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Your Message"
                        rows={5}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-[#007acc] hover:bg-[#005f99] text-white px-6 py-3 w-full font-semibold text-xl rounded-xl transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;