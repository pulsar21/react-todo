import bgImg from "../assets/images/bg.jpg";

const App = () => {
    return (
        <div className={"app"}>
            <h2 className={"app__title"}>
                App
            </h2>
            <div>
                <img src={bgImg} alt="bg"/>
            </div>
        </div>
    );
};

export default App;