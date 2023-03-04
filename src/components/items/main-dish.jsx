import classes from "./dish-styles/main-dish.module.css";

const MainItem = (props) => {
  return (
    <div className={classes.container} style={props.style}>
      {props.children}
    </div>
  );
};

export default MainItem;
