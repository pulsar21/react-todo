import {ChangeEventHandler, FC} from "react";
import "../../assets/styles/input/input.scss";

interface IInputProps {
    className?: string,
    style?: {},
    type: string;
    placeholder?: string;
    value?: string;
    readOnly?: boolean;
    disabled?: boolean;
    onChange?: () => ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<IInputProps> = (props) => {
    const {
        className, style, type, placeholder,
        value, readOnly, disabled, onChange
    } = props;
    
    return (
        <input
            className={`input ${className}`}
            style={style}
            type={type}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly}
            disabled={disabled}
            onChange={onChange}
        />
    );
};

export default Input;