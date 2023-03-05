import { useState } from 'react';

import classes from "./screen-styles/main-screen.module.css";
import Queue from "./ui/queue";
import DishItems from "./ui/dish-items";

const MainScreen = (props) => {

  const [orderedFood, setOrderedFood] = useState([]);

  const orderHandler = (foodObject) => {
    const tempArr = orderedFood.slice();
    tempArr.push(foodObject);
    setOrderedFood(tempArr);
  }

  return (
    <div className={classes.container}>
    
    
    <DishItems addOrder={orderHandler}/>
    
    {/* Queue */}
    <Queue callStaffClick={props.callStaffClick} foodQueue={orderedFood}/>

    </div>
  );
};

export default MainScreen;
