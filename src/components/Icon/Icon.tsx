import {FC} from "react";
import "../../assets/styles/icon/icon.scss";

interface IIconProps {
    width?: number;
    height?: number;
    src: string;
}

const Icon: FC<IIconProps> = (props) => {
    const {

    } = props;

    return (
        <svg>
            Icon
        </svg>
    );
};

export default Icon;