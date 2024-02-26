import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Header() {
    const [burgerMenu, setBurgerMenu] = useState(false)

    function handleBurgerMenu() {

            const burgerMenu = document.querySelector('.burgerMenu')

            burgerMenu.classList.toggle('show')

            if (burgerMenu.classList.contains('show')) {
                setBurgerMenu(true)
            }
            else {
                setBurgerMenu(false)
            }  
    }

    return(
        <div className="header">
            <a href="#"><img src="/img/website-icon.svg" alt="Website Icon" /></a>
            <div className="navBars">
                <nav style={{display: burgerMenu  ? 'block' : 'none'}}>
                    <NavLink to="/">
                        <div className="navBar">
                            <span>
                                <p className="navNumber">00</p>
                                <h5>HOME</h5>
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to="/destination">
                        <div className="navBar">
                            <span>
                                <p className="navNumber">01</p>
                                <h5>DESTINATION</h5>
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to="/crew">
                        <div className="navBar">
                            <span>
                                <p className="navNumber">02</p>
                                <h5>CREW</h5>
                            </span>
                        </div>
                    </NavLink>
                    <NavLink to="/technology">
                        <div className="navBar">
                            <span>
                                <p className="navNumber">03</p>
                                <h5>TECHNOLOGY</h5>
                            </span>
                        </div>
                    </NavLink>
                </nav>
                <div className="burgerMenu">
                    <img className="burgerOpen" onClick={handleBurgerMenu} src="/img/burger-menu-icon.svg" alt="Burger Menu Icon" />
                    <img className="burgerClose" onClick={handleBurgerMenu} src="/img/burger-x-menu-icon.svg" alt="Burger Menu Icon" />
                </div>
            </div>
        </div>

    )
}
