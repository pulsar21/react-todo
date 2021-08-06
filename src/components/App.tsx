import bgImg from "../assets/images/bg.jpg";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Circle from "./Circle/Circle";
import Radio from "./Radio/Radio";
import Icon from "./Icon/Icon";
import Divider from "./Divider/Divider";
import closeSvg from "../assets/images/svg/close.svg"
import Plus from "./Icon/Plus/Plus";
import Close from "./Icon/Close/Close";
import Edit from "./Icon/Edit/Edit";
import Success from "./Icon/Success/Success";
import AlignLeft from "./Icon/AlignLeft/AlignLeft";

const App = () => {
    return (
        <div className={"app"}>
            <Plus width={30} height={30}/>
            <Close width={30} height={30}/>
            <Edit width={30} height={30}/>
            <Success width={30} height={30}/>
            <AlignLeft width={30} height={30}/>
        </div>
    );
};

export default App;