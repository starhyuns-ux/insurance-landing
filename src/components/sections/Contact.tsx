import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { content } from '../../data/content';

export const Contact: React.FC = () => {
    const { sectionTitle, description, buttons, placeholder } = content.contact;

    return (
        <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
            <Container>
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
                    <SectionTitle title={sectionTitle} subtitle={description} className="mb-10" />

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        {buttons.map((btn) => (
                            <a
                                key={btn.label}
                                href={btn.href}
                                className="w-full sm:w-auto"
                                target={btn.type === 'kakao' ? '_blank' : undefined}
                                rel={btn.type === 'kakao' ? 'noopener noreferrer' : undefined}
                            >
                                <Button
                                    variant={btn.type === 'kakao' ? 'kakao' : 'phone'}
                                    size="lg"
                                    className="w-full font-bold text-lg"
                                >
                                    {btn.type === 'kakao' && <MessageCircle className="w-5 h-5 mr-2" />}
                                    {btn.type === 'phone' && <Phone className="w-5 h-5 mr-2" />}
                                    {btn.label}
                                </Button>
                            </a>
                        ))}
                    </div>

                    <p className="text-gray-400 text-sm">
                        {placeholder}
                    </p>
                </div>
            </Container>
        </section>
    );
};
