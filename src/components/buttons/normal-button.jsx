import MainButton from "./main-button";

// Normal Button

const NormalButton = (props) => {
    return (
        <MainButton onClick={props.onClick}>
            {props.children}
        </MainButton>
    )
}

export default NormalButton;