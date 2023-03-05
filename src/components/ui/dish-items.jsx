import classes from "../screen-styles/main-screen.module.css";
import MainDish from "../items/main-dish";

const DishItems = (props) => {
  const dishes = [
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
    { id: 2, dishName: "Fishda", img: "./assets/dish2.png" },
    { id: 3, dishName: "Fishda", img: "./assets/dish3.png" },
    { id: 4, dishName: "Fishda", img: "./assets/dish4.png" },
    { id: 5, dishName: "Fishda", img: "./assets/dish5.png" },
    { id: 5, dishName: "Fishda", img: "./assets/dish6.png" },
    { id: 5, dishName: "Fishda", img: "./assets/dish7.png" },
    { id: 5, dishName: "Fishda", img: "./assets/dish5.png" },
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
    { id: 5, dishName: "Fishda", img: "./assets/dish7.png" },
    { id: 5, dishName: "Fishda", img: "./assets/dish5.png" },
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
  ];

  const dishList = dishes.map((dish) => (
    <MainDish key={dish.id}>
      {dish.dishName}
      <img className={classes.normalDish} src={dish.img} />
      <p>150</p>
    </MainDish>
  ));

  return (
    <div className={classes.items}>
      {/* ITEMS */}

      <div className={classes.normalDishContainer}>{dishList}</div>

      <div className={classes.bottomContainer}></div>
    </div>
  );
};

export default DishItems;
