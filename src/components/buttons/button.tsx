import React from 'react';

interface ButtonProps {
    title: string;
    size: "sm" | "lg" | "xl";
    type: "primary" | "secondary";
}

const Button = ({ title, size, type }: ButtonProps) => {
    // Determine button classes based on size and type
    let buttonClasses = "rounded-md px-4 py-2 text-white ";
    if (size === "sm") {
        buttonClasses += "text-sm ";
    } else if (size === "lg") {
        buttonClasses += "text-lg ";
    } else if (size === "xl") {
        buttonClasses += "text-xl ";
    }

    if (type === "primary") {
        buttonClasses += "bg-blue-500 hover:bg-blue-600 ";
    } else if (type === "secondary") {
        buttonClasses += "bg-gray-500 hover:bg-gray-600 ";
    }

    return (
        <button className={buttonClasses}>
            {title}
        </button>
    );
}

export default Button;
