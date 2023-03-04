import MainButton from "./main-button";

const DarkButton = (props) => {

    const localStyle = {
        backgroundColor: '#333',
        color: '#fff'
    }

    return(
        <MainButton onclick={props.onclick} style={localStyle}>
            {props.children}
        </MainButton>
    )
}

export default DarkButton;