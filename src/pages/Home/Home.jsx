import Button from "../../components/Topbar/Button/Button"
import PanelContainer from "../../components/Home/PanelContainer/PanelContainer"

import "./Home.css";

const TopbarButtons = [
    "Home",
    "Contact",
    "Jobs",
    "FAQ",
]

const HomePanels = [
    {
        "name": "Panel Name 1",

        "description": "Panel Description 1",
        "image": "",
    },
    {
        "name": "testPanel",

        "description": "Panel Description 2",
        "image": "",
    },
]

function Home() {
    return (
        <>
            <div className="topbar">
                {
                    TopbarButtons.map(
                        ( object, index ) => {
                            return < Button textContent = { object } onClick = {
                                () => {
                                    location.assign(`/${object.toLowerCase()}`)
                                }
                            } />
                        }
                    )
                }
            </div>
            <div className="content">
                {
                    HomePanels.map(
                        ( object, index ) => {
                            return < PanelContainer
                                name = { object["name"] }
                                description = { object["description"] }
                                image = { object["image"] }
                            />
                        }
                    )
                }
            </div>
            <div className="footer"></div>
        </>
    )
}

export default Home;