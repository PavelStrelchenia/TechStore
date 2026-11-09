type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline";
};

const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border border-gray-300 text-gray-900 hover:bg-gray-100",
};

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
    return (
        <button
            className={`inline-flex items-center justify-center rounded-md  px-5 py-3 font-medium transition-colors ${variants[variant]}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
