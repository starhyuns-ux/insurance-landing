import React from 'react';
import { Container } from './Container';
import { content } from '../../data/content';

export const Footer: React.FC = () => {
    const { contactInfo, copyright, links } = content.footer;

    return (
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="mb-2">{contactInfo}</p>
                        <p>{copyright}</p>
                    </div>
                    <div className="flex space-x-6">
                        {links.map((link) => (
                            <a key={link} href="#" className="hover:text-navy-700 transition-colors">
                                {link}
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
};
