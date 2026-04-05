"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
    { title: "Profile", path: "#profile" },
    { title: "Activities", path: "#activities" },
    { title: "Projects", path: "#works" },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <header className="bg-zinc-900 text-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <Link href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
                        Haruya Fujii
                    </Link>

                    <ul className="hidden md:flex space-x-8">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.path}
                                    onClick={(e) => handleScroll(e, link.path)}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="bg-zinc-900 text-white border-zinc-800">
                                <nav className="flex flex-col space-y-4 mt-8">
                                    {navLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.path}
                                            onClick={(e) => handleScroll(e, link.path)}
                                            className="text-lg hover:text-gray-300 transition-colors"
                                        >
                                            {link.title}
                                        </a>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;