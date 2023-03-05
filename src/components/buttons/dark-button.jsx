import MainButton from "./main-button";

const DarkButton = (props) => {

    const localStyle = {
        backgroundColor: '#333',
        color: '#fff'
    }

    return(
        <MainButton onClick={props.onClick} style={localStyle}>
            {props.children}
        </MainButton>
    )
}

export default DarkButton;