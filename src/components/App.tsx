import bgImg from "../assets/images/bg.jpg";
import Button from "./Button/Button";
import Input from "./Input/Input";
import Circle from "./Circle/Circle";
import Radio from "./Radio/Radio";
import Icon from "./Icon/Icon";
import Divider from "./Divider/Divider";

const App = () => {
    return (
        <div className={"app"}>
            <Button className={"btn"} value={'add'}/>
            <Input type={"text"} placeholder={"change"}/>
            <Circle />
            <Radio />
            <Icon />
            <Divider />
        </div>
    );
};

export default App;