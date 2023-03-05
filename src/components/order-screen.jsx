import NormalButton from './buttons/normal-button';

const OrderScreen = (props) =>{
    return(
        <div>
            ORDER KO!
            <NormalButton onClick={props.returnClick}>Return</NormalButton>
        </div>
    )
}

export default OrderScreen;