import classes from "./screen-styles/main-screen.module.css";
import Queue from "./ui/queue";
import DishItems from "./ui/dish-items";

const MainScreen = (props) => {
  return (
    <div className={classes.container}>
    
    <DishItems />
    
    {/* Queue */}
    <Queue callStaffClick={props.callStaffClick} />

    </div>
  );
};

export default MainScreen;
