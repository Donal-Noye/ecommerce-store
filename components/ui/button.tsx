import {ButtonHTMLAttributes, forwardRef} from "react";
import {cn} from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, disabled, type = 'button', ...props }, ref) => {
	return (
		<button
			className={cn(
				"btn"
				, className)}
			ref={ref}
			{...props}
			disabled={disabled}
		>
			{children}
		</button>
	);
})

Button.displayName = 'Button'

export default Button;
