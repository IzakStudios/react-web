import "./PanelContainer.css"
import PanelButton from "../PanelButton/PanelButton"

function PanelContainer(props) {
    return (
        <div className="panel-container-holder">
            <img src={props["image"]} />
            
            <h1>{props["name"]}</h1>
            <p1>{props["description"]}</p1>

            <PanelButton textContent = "Info" />
        </div>
    )
}

export default PanelContainer;