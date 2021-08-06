import {FC} from "react";

interface ISuccessProps {
    width?: number;
    height?: number;
    color?: string;
    fill?: string;
}

const Success: FC<ISuccessProps> = (props) => {
    const {
        width=12, height=12, color="#868686", fill="none"
    } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 11 8"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                stroke={color}
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default Success;