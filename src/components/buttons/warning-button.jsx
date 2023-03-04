import MainButton from "./main-button"

const WarningButton = (props) => {

    const localStyles = {
        backgroundColor: '#B52E32',
        color: 'white'
    };

    return(
        <MainButton onclick={props.onclick} style={localStyles}>
            {props.children}
        </MainButton>
    )
}

export default WarningButton;