import classes from "../screen-styles/main-screen.module.css";
import MainDish from "../items/main-dish";

const DishItems = (props) => {
  const dishes = [
    { id: 1, dishName: "Fishda", img: "./assets/dish1.png", special: true, specialText: "50% off", price: 650},
    { id: 2, dishName: "Sisig", img: "./assets/dish2.png" , price: 550 },
    { id: 3, dishName: "Adobo", img: "./assets/dish3.png", price: 300 },
    { id: 4, dishName: "Sinigang", img: "./assets/dish4.png", price: 250 },
    { id: 5, dishName: "Mechado", img: "./assets/dish5.png", price: 120 },
    { id: 6, dishName: "Menudo", img: "./assets/dish6.png", price: 75 },
    { id: 7, dishName: "Dinuguan", img: "./assets/dish7.png", special: true, specialText: "Recommended for INC", price: 20},
    { id: 8, dishName: "BetaMax", img: "./assets/dish5.png", price: 10},
    { id: 9, dishName: "Isaw", img: "./assets/dish1.png", price: 120 },
    { id: 10, dishName: "BBKoe", img: "./assets/dish1.png", price: 120 },
    { id: 11, dishName: "Isda", img: "./assets/dish1.png", price: 120 },
    { id: 12, dishName: "Baboy", img: "./assets/dish1.png", special: true, specialText: "10% off", price: 120 },
    { id: 13, dishName: "ChrisBrown", img: "./assets/dish7.png", price: 120 },
    { id: 14, dishName: "BlackGod", img: "./assets/dish5.png", price: 120 },
    { id: 15, dishName: "HakuJin", img: "./assets/dish1.png", price: 120 },
    { id: 16, dishName: "JunjiTito", img: "./assets/dish1.png", price: 120 },
    { id: 17, dishName: "Chicken", img: "./assets/dish1.png", price: 120 },
    { id: 18, dishName: "Badang", img: "./assets/dish1.png", price: 120 },
  ];

  const dishList = dishes.map((dish) => (
    <MainDish 
    onClick={() => props.addOrder(dish)}
    key={dish.id}
    >
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

      <div className={classes.bottomContainer}>
        {/* LANGUAGE SETTINGS OR OTHER OPTIONS */}
      </div>
    </div>
  );
};

export default DishItems;
