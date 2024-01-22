import "./Button.css"

function Button(props) {
    return (
        <div className="topbar-button-holder">
            <button onClick={props.onClick}>{props.textContent}</button>
        </div>
    )
}

export default Button;