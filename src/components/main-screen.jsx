import { useEffect, useState } from 'react';

import classes from "./screen-styles/main-screen.module.css";
import Queue from "./ui/queue";
import DishItems from "./ui/dish-items";

const MainScreen = (props) => {

  const [orderedFood, setOrderedFood] = useState([]);
  const [orderedFoodId, setOrderedFoodId] = useState([]);

  const orderHandler = (foodObject) => {
    const checkIfExists = orderedFoodId.some(x => x.id === foodObject.id);
    if(!checkIfExists){ // First time setting the food
      const tempArr = orderedFoodId.slice();
      const prevFood = orderedFood.slice();
      tempArr.push({id: foodObject.id, amount: 1});
      prevFood.push(foodObject);
      setOrderedFoodId(tempArr);
      setOrderedFood(prevFood);
    }
    else{ // Increment the amount of food
      
    }
    // const tempArr = orderedFood.slice();
    // tempArr.push(foodObject);
    // setOrderedFood(tempArr);
  }

  useEffect(() => {
    console.log(orderedFoodId);
    console.log(orderedFood)
  },[orderedFood, orderedFoodId]);

  const orderDeleteHander = (foodId) => {
    const tempArr = orderedFood.slice().filter(x => x.id !== foodId);
    setOrderedFood(tempArr);
  }

  return (
    <div className={classes.container}>
    
    
    <DishItems addOrder={orderHandler}/>
    
    {/* Queue */}
    <Queue callStaffClick={props.callStaffClick} foodQueue={orderedFood} deleteQueue={orderDeleteHander}/>

    </div>
  );
};

export default MainScreen;
