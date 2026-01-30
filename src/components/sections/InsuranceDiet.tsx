import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { content } from '../../data/content';
import { ArrowDown } from 'lucide-react';

export const InsuranceDiet: React.FC = () => {
    const { sectionTitle, description, steps, note } = content.diet;

    return (
        <section id="diet" className="py-20 bg-white">
            <Container>
                <SectionTitle title={sectionTitle} subtitle={description} />

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8 relative">
                        {steps.map((step, index) => (
                            <div key={step.step} className="relative z-10">
                                <div className="bg-white border-2 border-navy-100 rounded-2xl p-8 hover:border-navy-500 transition-colors duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                                        <div className="flex-shrink-0 bg-navy-100 text-navy-700 font-bold py-1 px-3 rounded text-sm w-fit">
                                            {step.step}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                            <p className="text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="flex justify-center -my-2 relative z-0">
                                        <ArrowDown className="w-8 h-8 text-navy-200" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-8">{note}</p>
                </div>
            </Container>
        </section>
    );
};
