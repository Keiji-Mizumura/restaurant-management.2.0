import classes from "../screen-styles/main-screen.module.css";
import MainDish from "../items/main-dish";

const DishItems = (props) => {
  const dishes = [
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png", special: true, specialText: "50% off", price: 120 },
    { id: 2, dishName: "Sisig", img: "./assets/dish2.png" , price: 120 },
    { id: 3, dishName: "Adobo", img: "./assets/dish3.png", price: 120 },
    { id: 4, dishName: "Sinigang", img: "./assets/dish4.png", price: 120 },
    { id: 5, dishName: "Mechado", img: "./assets/dish5.png", price: 120 },
    { id: 5, dishName: "Menudo", img: "./assets/dish6.png", price: 120 },
    { id: 5, dishName: "Dinuguan", img: "./assets/dish7.png", special: true, specialText: "Recommended for INC", price: 120},
    { id: 5, dishName: "BetaMax", img: "./assets/dish5.png", price: 120 },
    { id: 1, dishName: "Isaw", img: "./assets/dish1.png", price: 120 },
    { id: 1, dishName: "BBKoe", img: "./assets/dish1.png", price: 120 },
    { id: 1, dishName: "Isda", img: "./assets/dish1.png", price: 120 },
    { id: 1, dishName: "Baboy", img: "./assets/dish1.png", special: true, specialText: "10% off", price: 120 },
    { id: 5, dishName: "ChrisBrown", img: "./assets/dish7.png", price: 120 },
    { id: 5, dishName: "BlackGod", img: "./assets/dish5.png", price: 120 },
    { id: 1, dishName: "HakuJin", img: "./assets/dish1.png", price: 120 },
    { id: 1, dishName: "JunjiTito", img: "./assets/dish1.png", price: 120 },
    { id: 1, dishName: "Chicken", img: "./assets/dish1.png", price: 120 },
    { id: 1, dishName: "Badang", img: "./assets/dish1.png", price: 120 },
  ];

  const dishList = dishes.map((dish) => (
    <MainDish key={dish.id}>
      {dish.special && <div className={classes.special}><p>{dish.specialText}</p></div>}
      <h2 className={classes.dishName}>{dish.dishName}</h2>
      <img className={classes.normalDish} src={dish.img} />
      <p className={classes.price}>普通 {dish.price}円</p>
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
