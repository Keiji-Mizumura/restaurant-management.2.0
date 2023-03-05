import classes from '../screen-styles/main-screen.module.css';

import WarningButton from '../buttons/warning-button';
import DarkButton from '../buttons/dark-button';

const Queue = (props) => {

    // TEST COMMENT AGAIN

    let lists;
    let total = 0;

    if(props.foodQueue.length > 0){
        lists = props.foodQueue.map(x => 
            <div key={x.id} className={classes.order_item}>
                <img src={x.img} />
                <div className={classes.order_info}>
                    <h3>{x.dishName}</h3>
                    <p>普通</p>
                    <p className={classes.order_price}>{x.price}円</p>
                    <p style={{display: 'none'}}>
                    {
                        total += x.price
                    }
                    </p>
                </div>
            </div>
        );
    }
    else{
        lists = <></>;
    }

    return(
        <div className={classes.queue}>
        {/* QUEUE */}
            <div className={classes.controls}>
                <WarningButton onClick={props.callStaffClick}>Call Staff</WarningButton>
            </div>
            <div className={classes.orders}>
                <h2>Order Contents</h2>
                {lists}
            </div>
            <div className={classes.total}>
                <p>合計金額</p>
                <p>{total}円</p>
            </div>
            <div className={classes.controls}>
                <DarkButton>すべて取消</DarkButton>
                <WarningButton>注文する</WarningButton>
            </div>
        </div>
    )
}

export default Queue;