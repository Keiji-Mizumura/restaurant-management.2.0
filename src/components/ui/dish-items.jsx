import classes from "../screen-styles/main-screen.module.css";
import MainDish from "../items/main-dish";

const DishItems = (props) => {
  const dishes = [
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png" },
    { id: 2, dishName: "Sisig", img: "./assets/dish2.png" },
    { id: 3, dishName: "Adobo", img: "./assets/dish3.png" },
    { id: 4, dishName: "Sinigang", img: "./assets/dish4.png" },
    { id: 5, dishName: "Mechado", img: "./assets/dish5.png" },
    { id: 5, dishName: "Menudo", img: "./assets/dish6.png" },
    { id: 5, dishName: "Dinuguan", img: "./assets/dish7.png" },
    { id: 5, dishName: "BetaMax", img: "./assets/dish5.png" },
    { id: 1, dishName: "Isaw", img: "./assets/dish1.png" },
    { id: 1, dishName: "BBKoe", img: "./assets/dish1.png" },
    { id: 1, dishName: "Isda", img: "./assets/dish1.png" },
    { id: 1, dishName: "Baboy", img: "./assets/dish1.png" },
    { id: 5, dishName: "ChrisBrown", img: "./assets/dish7.png" },
    { id: 5, dishName: "BlackGod", img: "./assets/dish5.png" },
    { id: 1, dishName: "HakuJin", img: "./assets/dish1.png" },
    { id: 1, dishName: "JunjiTito", img: "./assets/dish1.png" },
    { id: 1, dishName: "Chicken", img: "./assets/dish1.png" },
    { id: 1, dishName: "Badang", img: "./assets/dish1.png" },
  ];

  const dishList = dishes.map((dish) => (
    <MainDish key={dish.id}>
      <h2 className={classes.dishName}>{dish.dishName}</h2>
      <img className={classes.normalDish} src={dish.img} />
      <p className={classes.price}>15000</p>
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
