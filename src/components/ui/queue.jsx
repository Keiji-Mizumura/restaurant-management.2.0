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
                <div className={classes.queue_image}>
                    <img src={x.img} />
                    <WarningButton onClick={() => props.deleteQueue(x.id)}>変更</WarningButton>  
                </div>
                <div className={classes.order_info}>
                    <div className={classes.order_name}>
                        <h3>{x.dishName}</h3>
                        <p>普通</p>
                    </div>
                    <div className={classes.order_price}>
                        <div className={classes.order_amount}>
                            <p>数量</p>
                            <div className={classes.amount_circle}>
                                <p>{props.foodAmount.map(y => y.id === x.id && y.amount)}</p>
                            </div>
                        </div>
                        <p className={classes.order_price_text}>{x.price}円</p>
                    </div>
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
                <h2>注文リスト</h2>
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