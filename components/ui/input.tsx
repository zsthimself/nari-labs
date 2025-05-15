import { InputHTMLAttributes } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

export const Input = ({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: InputProps) => {
  const baseStyles = "flex rounded-md border border-gray-300 bg-white px-3 text-gray-900 ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
  
  const variantStyles = {
    default: "shadow-sm",
    outline: "border-2",
  };
  
  const sizeStyles = {
    default: "h-10 py-2 text-sm",
    sm: "h-8 py-1 text-xs",
    lg: "h-12 py-3 text-base",
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  return <input className={combinedClassName} {...props} />;
};

// 添加默认导出
export default Input; 