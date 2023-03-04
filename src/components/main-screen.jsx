import classes from './screen-styles/main-screen.module.css';

import WarningButton from './buttons/warning-button';
import DarkButton from './buttons/dark-button';

import NormalDish from './items/normal-dish';

const MainScreen = () => {
    return(
        <div className={classes.container}>

            <div className={classes.items}>
                {/* ITEMS */}
                <NormalDish>
                    Ulam
                    <img src={require('./assets/dish1.png')} />
                </NormalDish>
            </div>

            <div className={classes.queue}>
                {/* QUEUE */}
                <div className={classes.controls}>
                    <WarningButton>Call Staff</WarningButton>
                </div>
                <div className={classes.orders}>
                    <h2>Order Contents</h2>
                    <div className={classes.order_item}>
                    </div>
                    <div className={classes.order_item}>
                    </div>
                    <div className={classes.order_item}>
                    </div>
                    <div className={classes.order_item}>
                    </div>
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
    )
}

export default MainScreen;