import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { content } from '../../data/content';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { logo, items } = content.nav;

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0">
                        <span className="text-xl font-bold text-navy-900">{logo}</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {items.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="text-gray-600 hover:text-navy-700 px-3 py-2 rounded-md font-medium transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-navy-700 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-100 shadow-lg">
                        {items.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-gray-600 hover:text-navy-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};
