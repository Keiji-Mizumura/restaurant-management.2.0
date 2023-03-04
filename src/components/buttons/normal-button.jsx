import MainButton from "./main-button";

// Normal Button

const NormalButton = (props) => {
    return (
        <MainButton onclick={props.onclick}>
            {props.children}
        </MainButton>
    )
}

export default NormalButton;