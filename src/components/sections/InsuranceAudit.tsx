import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { content } from '../../data/content';
import { CheckCircle2 } from 'lucide-react';

export const InsuranceAudit: React.FC = () => {
    const { sectionTitle, description, cards, results } = content.audit;

    return (
        <section id="audit" className="py-20 bg-gray-50">
            <Container>
                <SectionTitle title={sectionTitle} subtitle={description} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {cards.map((card) => (
                        <Card key={card.title} title={card.title} className="h-full">
                            {card.desc}
                        </Card>
                    ))}
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-3xl mx-auto">
                    <h3 className="text-lg font-bold text-center mb-6">점검 후 이런 결과를 얻을 수 있습니다</h3>
                    <div className="space-y-4">
                        {results.map((result) => (
                            <div key={result} className="flex items-center p-4 bg-navy-50 rounded-lg">
                                <CheckCircle2 className="w-6 h-6 text-navy-600 mr-4 flex-shrink-0" />
                                <span className="font-medium text-navy-900">{result}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
