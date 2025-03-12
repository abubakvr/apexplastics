import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  const combinedClasses = `${baseClasses} ${
    variantClasses[variant] || ""
  } ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
