import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const inputClasses = clsx(
      "w-full px-6 py-3 text-xl border rounded border-black/15",
      className
    );

    return <input ref={ref} {...props} className={inputClasses} />;
  }
);
