import React from "react";
import classNames from "classnames";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"; 
  color?: "primary" | "secondary" | "outline" | "danger";
  isLoading?: boolean;
  isDisabled?: boolean;
  isIconOnly?: boolean; 
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  radius = "md",
  color = "primary",
  isLoading = false,
  isDisabled = false,
  isIconOnly = false,
  iconLeft,
  iconRight,
  children,
  onClick,
}) => {
  const buttonClasses = classNames(
    "flex items-center justify-center focus:outline-none transition ease-in-out duration-200",
    {
      "px-3 py-1.5 text-sm": size === "small",
      "px-4 py-2 text-base": size === "medium",
      "px-5 py-3 text-lg": size === "large",
      "rounded-none": radius === "none",
      "rounded-sm": radius === "sm",
      "rounded-md": radius === "md",
      "rounded-lg": radius === "lg",
      "rounded-xl": radius === "xl",
      "rounded-2xl": radius === "2xl",
      "rounded-full": radius === "full",
      "bg-blue-500 text-white hover:bg-blue-600": color === "primary",
      "bg-gray-500 text-white hover:bg-gray-600": color === "secondary",
      "border border-gray-500 text-gray-500 hover:bg-gray-100": color === "outline",
      "bg-red-500 text-white hover:bg-red-600": color === "danger",
      "cursor-not-allowed opacity-50": isDisabled || isLoading,
    }
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {isLoading && (
        <div className="animate-spin border-2 border-t-2 border-white h-4 w-4 mr-2 rounded-full"></div>
      )}
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      {!isIconOnly && children}
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
};

export default Button;
