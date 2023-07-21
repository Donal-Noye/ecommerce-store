import {cn} from "@/lib/utils";
import {FC, MouseEventHandler, ReactElement} from "react";

interface IconButtonProps {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
	icon: ReactElement;
	className?: string;
}

const IconButton: FC<IconButtonProps> = ({ onClick, icon, className }) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				"icon-btn",
				className
			)}
		>
			{icon}
		</button>
	);
};

export default IconButton;
