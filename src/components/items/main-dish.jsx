import classes from "./dish-styles/main-dish.module.css";

const MainDish = (props) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default MainDish;
