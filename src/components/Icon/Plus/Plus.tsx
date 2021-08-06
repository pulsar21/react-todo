import {FC} from "react";

interface IPlusProps {
    width?: number;
    height?: number;
    color?: string;
    fill?: string;
}

const Plus: FC<IPlusProps> = (props) => {
    const {
        width=12, height=12, color="#868686", fill
    } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 12 12"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 1V11"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M1 6H11"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default Plus;