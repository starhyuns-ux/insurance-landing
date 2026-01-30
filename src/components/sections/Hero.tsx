import React from 'react';
import { ShieldCheck, Search, HelpCircle } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { content } from '../../data/content';

export const Hero: React.FC = () => {
    const { title, subtitle, trustPoints, cta, disclaimer } = content.hero;

    const icons = [ShieldCheck, Search, HelpCircle];

    return (
        <section className="relative bg-white pt-10 pb-16 lg:pt-20 lg:pb-28 overflow-hidden">
            <Container>
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 mb-6 break-keep">
                        {title}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto break-keep leading-relaxed">
                        {subtitle}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-medium text-gray-500">
                        {trustPoints.map((point, index) => {
                            const Icon = icons[index] || ShieldCheck;
                            return (
                                <div key={point} className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                                    <Icon className="w-4 h-4 mr-2 text-navy-600" />
                                    {point}
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 px-4">
                        <Button size="lg" className="w-full sm:w-auto shadow-xl shadow-navy-200/50">
                            {cta.primary}
                        </Button>
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                            {cta.secondary}
                        </Button>
                    </div>

                    <p className="text-xs text-gray-400">
                        {disclaimer}
                    </p>
                </div>
            </Container>
        </section>
    );
};
