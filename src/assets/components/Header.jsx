import { NavLink } from "react-router-dom"

export default function Header() {

    return(
        <div className="header">
            <a href="#"><img src="./public/img/website-icon.svg" alt="Website Icon" /></a>
            <div className="navBars">
                <div className="navBar">
                    <NavLink to="/">
                        <span>
                            <p>00</p>
                            <h5>HOME</h5>
                        </span>
                    </NavLink>
                </div>
                <div className="navBar">
                    <NavLink to="/destination">
                            <span>
                                <p>01</p>
                                <h5>DESTINATION</h5>
                            </span>
                    </NavLink>
                </div>
                <div className="navBar">
                    <NavLink to="/crew">
                        <span>
                            <p>02</p>
                            <h5>CREW</h5>
                        </span>
                    </NavLink>
                </div>
                <div className="navBar">
                    <NavLink to="/technology">
                        <span>
                            <p>03</p>
                            <h5>TECHNOLOGY</h5>
                        </span>
                    </NavLink>
                </div>
            </div>
        </div>

    )
}