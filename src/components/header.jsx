import NormalButton from "./buttons/normal-button";
import WarningButton from "./buttons/warning-button";

import NormalDish from "./items/normal-dish";
import SmallDish from "./items/small-dish";
import classes from "./items/dish-styles/main-dish.module.css";

const Header = () => {
  return (
    <div>
      <header>
        <NormalButton>TESTING</NormalButton>
        <WarningButton>Warning</WarningButton>
      </header>
      <div>
        <NormalDish>
          CHICKEN JOY
          <img
            className={classes.dish}
            src={require("./assets/dish1.png")}
          />
        </NormalDish>
        <SmallDish>
          PANCIT CANTON
          <img
            className={classes.dish}
            src={require("./assets/dish2.png")}
          />
        </SmallDish>
      </div>
    </div>
  );
};

export default Header;
