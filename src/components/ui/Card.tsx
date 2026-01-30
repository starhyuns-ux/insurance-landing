import React from 'react';

interface CardProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
    return (
        <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-6 ${className}`}>
            <h3 className="text-xl font-bold text-navy-800 mb-3">{title}</h3>
            <div className="text-gray-600">
                {children}
            </div>
        </div>
    );
};
