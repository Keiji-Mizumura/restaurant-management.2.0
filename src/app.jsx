import {useState} from 'react';

import MainScreen from "./components/main-screen";
import OrderScreen from './components/order-screen';

import classes from './styles/app.module.css';

const App = () => { 

    // Test Code
    const [amount, setAmount] = useState(0);

    const testHandler = () => {
        setAmount(amount + 1);
    }

    // Code for changing through different screens
    const [activeScreen, setActiveScreen] = useState(1);
    let screen;

    const staffHandler = () => {
        setActiveScreen(2);
    }

    const returnHandler = () => {
        setActiveScreen(1);
    }

    if(activeScreen === 1){
        screen = <MainScreen callStaffClick={staffHandler}/>
    }
    else{
        screen = <OrderScreen returnClick={returnHandler} testClick={testHandler} amount={amount}/>
    }


    return (
        <div className={classes.display}>
            {screen}
        </div>
    )
}

export default App;