import React, { useState, useEffect } from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { content } from '../../data/content';
import { Building2 } from 'lucide-react';

const InsurerCard: React.FC<{ item: { name: string; logo?: string } }> = ({ item }) => {
    const [imageError, setImageError] = useState(false);

    // Simplified logic: Resetting error state when logo changes by using a key on the img or just trusting the img element behaviors.
    // However, to strictly reset `imageError`, we should do it when `item.logo` changes.
    // React warning is about cascading updates.
    // Better approach: Use local state key reset.
    useEffect(() => {
        const timer = setTimeout(() => setImageError(false), 0);
        return () => clearTimeout(timer);
    }, [item.logo]);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md group h-36 w-52 flex-shrink-0 mx-4">
            {!imageError && item.logo ? (
                <img
                    src={item.logo}
                    alt={item.name}
                    className="h-16 w-auto object-contain mb-3"
                    onError={() => setImageError(true)}
                />
            ) : (
                <div className="mb-3 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-navy-50 transition-colors">
                    <Building2 className="w-8 h-8 text-gray-400 group-hover:text-navy-600" />
                </div>
            )}
            <span className="text-gray-500 font-medium group-hover:text-navy-800 transition-colors text-sm whitespace-nowrap">
                {item.name}
            </span>
        </div>
    );
};

export const Insurers: React.FC = () => {
    const { sectionTitle, description, list } = content.insurers;

    // Duplicate list for infinite loop effect
    const duplicatedList = [...list, ...list];

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100 overflow-hidden">
            <Container>
                <SectionTitle title={sectionTitle} subtitle={description} />

                <div className="relative w-full overflow-hidden">
                    {/* Gradient Masks for fading edges */}
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                    {/* Scrolling Container */}
                    <div className="flex animate-scroll hover:[animation-play-state:paused] w-max">
                        {duplicatedList.map((item, index) => (
                            <InsurerCard
                                key={`${item.name}-${index}`}
                                item={item}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};
