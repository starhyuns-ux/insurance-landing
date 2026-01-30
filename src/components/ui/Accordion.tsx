import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItemProps {
    title: string;
    content: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex w-full items-center justify-between py-5 text-left text-base font-semibold leading-7 text-gray-900 hover:text-navy-700 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                <span className="ml-6 flex h-7 items-center">
                    {isOpen ? (
                        <ChevronUp className="h-5 w-5" aria-hidden="true" />
                    ) : (
                        <ChevronDown className="h-5 w-5" aria-hidden="true" />
                    )}
                </span>
            </button>
            {isOpen && (
                <div className="pb-6 pr-12">
                    <p className="text-base leading-7 text-gray-600">{content}</p>
                </div>
            )}
        </div>
    );
};
