import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-900 text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contacts</h3>
                        <a
                            href="mailto:haruya.fujii@example.com"
                            className="flex items-center gap-2 hover:text-gray-300 transition-colors mb-2"
                        >
                            <Mail className="h-4 w-4" />
                            huyara1211@gmail.com
                        </a>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/HaruyaFujii"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub className="h-5 w-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/haruyafujii"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="h-5 w-5" />
                            </a>
                            <a
                                href="https://twitter.com/haruyafujii"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-300 transition-colors"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800 text-center text-sm text-gray-400">
                    <p>© {currentYear} 藤井 陽也. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;