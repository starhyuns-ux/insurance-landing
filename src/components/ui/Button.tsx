import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'kakao' | 'phone';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg";

    const variants = {
        primary: "bg-navy-700 text-white hover:bg-navy-800 focus:ring-navy-500",
        secondary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
        outline: "border-2 border-navy-700 text-navy-700 hover:bg-navy-50 focus:ring-navy-500",
        kakao: "bg-[#FEE500] text-black hover:bg-[#FDD835] focus:ring-yellow-400",
        phone: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-base",
        lg: "px-6 py-3.5 text-lg",
    };

    const width = fullWidth ? "w-full" : "";

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
