import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { content } from '../../data/content';

export const Comparison: React.FC = () => {
    const { sectionTitle, description, criteria, resultNote, qa } = content.comparison;

    return (
        <section id="comparison" className="py-20 bg-navy-900 text-white">
            <Container>
                <SectionTitle
                    title={sectionTitle}
                    subtitle={description}
                    className="text-white [&>p]:text-navy-100 [&>h2]:text-white"
                />

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                    {criteria.map((item) => (
                        <div key={item} className="bg-navy-800 p-4 rounded-lg text-center font-medium border border-navy-700">
                            {item}
                        </div>
                    ))}
                </div>

                <p className="text-center text-navy-200 mb-16 text-sm">{resultNote}</p>

                <div className="grid md:grid-cols-3 gap-8">
                    {qa.map((item) => (
                        <div key={item.q} className="bg-navy-800/50 p-6 rounded-xl border border-navy-700/50">
                            <h4 className="font-bold text-lg mb-3 text-white">{item.q}</h4>
                            <p className="text-navy-100 leading-relaxed text-sm">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
