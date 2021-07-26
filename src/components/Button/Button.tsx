import {FC, MouseEventHandler} from "react";
import "../../assets/styles/button/button.scss";

enum ButtonVariant {
    default = "default",
    outlined = "outlined",
    primary = "primary",
    disabled = "disabled"
};

interface IButtonProps {
    className?: string;
    style?: {};
    autoFocus?: boolean;
    disabled?: boolean;
    value?: string;
    onClick?: () => MouseEventHandler<HTMLButtonElement>;
    variant?: ButtonVariant
};

const Button: FC<IButtonProps> = (props) => {
    const {
        children, className, style, autoFocus,
        disabled, value, onClick
    } = props;

    return (
        <button
            className={`btn ${className}`}
            style={style}
            autoFocus={autoFocus}
            disabled={disabled}
            onClick={onClick}
        >
            {
                children ?? value
            }
        </button>
    );
};

export default Button;