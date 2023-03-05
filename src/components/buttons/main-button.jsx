// MAIN BUTTON DO NOT MODIFY OR ELSE

import classes from './button-styles/main-button.module.css';

const MainButton = (props) => {

    return (
        <button className={classes.button} onClick={props.onClick} style={props.style}>
            {props.children}
        </button>
    )
}

export default MainButton;