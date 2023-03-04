import {useState} from 'react';

import MainScreen from "./components/main-screen";
import OrderScreen from './components/order-screen';

import classes from './styles/app.module.css';

const App = () => { 

    // Code for changing through different screens
    const [activeScreen, setActiveScreen] = useState(1);
    let screen;
    if(activeScreen == 1){
        screen = <MainScreen/>
    }
    else{
        screen = <OrderScreen/>
    }


    return (
        <div className={classes.display}>
            {screen}
        </div>
    )
}

export default App;