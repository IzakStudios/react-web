import Button from "../components/Topbar/Button/Button"

const TopbarButtons = [
    "Home",
    "Store",
    "Contact",
    "FAQ"
]
const TopbarRedirects = [
    "/",
    "/Store",
    "/Contact",
    "/FAQ"
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
                                    location.assign( TopbarRedirects[index] )
                                }
                            } />
                        }
                    )
                }
            </div>
            <div className="content">
                <h>{location.pathname.substring(1)}</h>
            </div>
            <div className="footer"></div>
        </>
    )
}

export default Home;