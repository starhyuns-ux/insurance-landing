import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    align = 'center',
    className = ''
}) => {
    return (
        <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
