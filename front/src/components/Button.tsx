import React, {FC} from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	textContent: string
}

const Button: FC<ButtonProps> = ({textContent, ...props}) => {
	return(
		<button{...props}>{textContent}</button>
	)
};

export default Button;