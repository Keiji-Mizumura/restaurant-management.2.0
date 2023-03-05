import classes from '../screen-styles/main-screen.module.css';
import NormalDish from '../items/normal-dish';
import HeaderDish from '../items/header-dish';

const DishItems = (props) => {

    const dishes = [
        {id: 1, dishName: "Fishda", img: "./assets/dish1.png"},
        {id: 2, dishName: "Fishda", img: "./assets/dish2.png"},
        {id: 3, dishName: "Fishda", img: "./assets/dish3.png"},
        {id: 4, dishName: "Fishda", img: "./assets/dish4.png"},
        {id: 5, dishName: "Fishda", img: "./assets/dish5.png"}
    ]

    const dishList = dishes.map(dish => 
        <NormalDish key={dish.id}>
            {dish.dishName}
            <img className={classes.normalDish} src={dish.img} />
        </NormalDish>    
    );

    return(
        <div className={classes.items}>
        {/* ITEMS */}
        <div className={classes.dishContainer}>
          <div>
            <HeaderDish></HeaderDish>
          </div>
          <div className={classes.normalDishContainer}>
            {dishList}
          </div>
        </div>
        <div className={classes.bottomContainer}></div>
      </div>
    )
}

export default DishItems;