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
        "image": "https://ih1.redbubble.net/image.490263180.2295/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    },
    {
        "name": "Panel Name 2",

        "description": "Panel Description 2",
        "image": "https://ih1.redbubble.net/image.490263180.2295/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    },
]

function Home() {
    return (
        <>
            <div className="topbar">
                {
                    TopbarButtons.map(
                        object => {
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
                        object => {
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