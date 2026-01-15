import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
    variant?: "primary" | "outline" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, href, variant = "primary", ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none";

        const variants = {
            primary:
                "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25",
            outline:
                "border border-white/20 hover:bg-white/10 text-white hover:border-white/40",
            ghost: "text-gray-400 hover:text-white hover:bg-white/5",
        };

        const combinedClassName = cn(baseStyles, variants[variant], className);

        if (href) {
            // Use Link for internal routes, a for external or files
            const isExternal = href.startsWith("http") || /\.(pdf|mp4|mov|webm)$/i.test(href);
            if (isExternal) {
                return (
                    <a
                        href={href}
                        className={combinedClassName}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {props.children}
                    </a>
                );
            }
            return (
                <Link href={href} className={combinedClassName}>
                    {props.children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={combinedClassName} {...props} />
        );
    }
);
Button.displayName = "Button";

export default Button;
