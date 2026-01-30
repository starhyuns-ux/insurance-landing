import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { AccordionItem } from '../ui/Accordion';
import { content } from '../../data/content';

export const FAQ: React.FC = () => {
    const { sectionTitle, items } = content.faq;

    return (
        <section id="faq" className="py-20 bg-white">
            <Container>
                <SectionTitle title={sectionTitle} />
                <div className="max-w-3xl mx-auto">
                    {items.map((item, index) => (
                        <AccordionItem key={index} title={item.q} content={item.a} />
                    ))}
                </div>
            </Container>
        </section>
    );
};
