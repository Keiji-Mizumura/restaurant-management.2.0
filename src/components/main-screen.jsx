import classes from "./screen-styles/main-screen.module.css";
import WarningButton from "./buttons/warning-button";
import DarkButton from "./buttons/dark-button";
import NormalDish from "./items/normal-dish";
import SmallDish from "./items/small-dish";
import HeaderDish from "./items/header-dish";

const MainScreen = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.items}>
        {/* ITEMS */}
        <div className={classes.dishContainer}>
          <div>
            <HeaderDish></HeaderDish>
          </div>
          <div className={classes.normalDishContainer}>
            <NormalDish>
              FISHDA
              <img
                className={classes.normalDish}
                src={require("./assets/dish1.png")}
              />
            </NormalDish>
            <NormalDish>
              PANCIT CANTON
              <img
                className={classes.normalDish}
                src={require("./assets/dish2.png")}
              />
            </NormalDish>
            <NormalDish>
              KAKANIN
              <img
                className={classes.normalDish}
                src={require("./assets/dish3.png")}
              />
            </NormalDish>
          </div>
          <div className={classes.smallDishContainer}>
            <SmallDish>
              SAMGYUP
              <img
                className={classes.smallDish}
                src={require("./assets/dish4.png")}
              />
            </SmallDish>
            <SmallDish>
              FISHBALL
              <img
                className={classes.smallDish}
                src={require("./assets/dish5.png")}
              />
            </SmallDish>
            <SmallDish>
              CHOPSUEY
              <img
                className={classes.smallDish}
                src={require("./assets/dish6.png")}
              />
            </SmallDish>
            <SmallDish>
              SISIG
              <img
                className={classes.smallDish}
                src={require("./assets/dish7.png")}
              />
            </SmallDish>
          </div>
        </div>
        <div className={classes.bottomContainer}></div>
      </div>
      <div className={classes.queue}>
        {/* QUEUE */}
        <div className={classes.controls}>
          <WarningButton onclick={props.onclick}>Call Staff</WarningButton>
        </div>
        <div className={classes.orders}>
          <h2>Order Contents</h2>
          <div className={classes.order_item}></div>
          <div className={classes.order_item}></div>
          <div className={classes.order_item}></div>
          <div className={classes.order_item}></div>
        </div>
        <div className={classes.total}>
          <p>Total: 3,500,000</p>
        </div>
        <div className={classes.controls}>
          <DarkButton>Clear All</DarkButton>
          <WarningButton>Confirm Order</WarningButton>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
