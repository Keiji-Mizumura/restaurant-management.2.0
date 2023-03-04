import Header from "./components/header";
import MainScreen from "./components/main-screen";

import classes from './styles/app.module.css';

const App = () => {
    return (
        <div className={classes.display}>
            <MainScreen/>
        </div>
    )
}

export default App;