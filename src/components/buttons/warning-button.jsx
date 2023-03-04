import MainButton from "./main-button"

const WarningButton = (props) => {
    return(
        <MainButton onclick={props.onclick} style={{backgroundColor: 'red'}}>
            {props.children}
        </MainButton>
    )
}

export default WarningButton;