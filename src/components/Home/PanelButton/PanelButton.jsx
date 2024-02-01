import "./PanelButton.css"

function PanelButton(props) {
    return (
        <div className="panel-button-holder">
            <button onClick={props.onClick}>{props.textContent}</button>
        </div>
    )
}

export default PanelButton;