import NormalButton from './buttons/normal-button';

const OrderScreen = (props) =>{

    return(
        <div>
            ORDER KO! ay {props.amount} pcs.
            <NormalButton onClick={props.returnClick}>Return</NormalButton>
            <NormalButton onClick={props.testClick}>TEST BUTTON</NormalButton>
        </div>
    )
}

export default OrderScreen;