import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition";

  const styles =
    variant === "outline"
      ? "border border-gray-300 bg-transparent hover:bg-gray-100"
      : "bg-emerald-600 text-white hover:bg-emerald-700";

  return (
    <button className={`${base} ${styles} ${className}`} {...props} />
  );
}