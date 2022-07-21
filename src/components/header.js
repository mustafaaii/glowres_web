import { useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import Logo from "../assets/img/logo/logo.svg";
const Header = () => {


    const headerMenu = [
        {
            menuId: 0,
            menuName: "Home",
            buttonid:"Home",
            menuTo: "/",

        },
        {
            menuId: 1,
            menuName: "Porfolio",
            buttonid:"Porfolio",
            menuTo: "/porfolio",
        },
        {
            menuId: 2,
            menuName: "Blog",
            buttonid:"Blog",
            menuTo: "/blog",
        },
        {
            menuId: 3,
            menuName: "Contact",
            buttonid:"Contact",
            menuTo: "/contact",
        },
    ];
    function toggleMenu() {
        document.getElementById('isToggle').classList.toggle('open');
        var isOpen = document.getElementById('navigation')
        if (isOpen.style.display === "block") {
            isOpen.style.display = "none";
        } else {
            isOpen.style.display = "block";
        }
    };
    const url = useLocation().pathname;

    return (
        <>
            <nav id="topnav" className="defaultscroll bg-white shadow-md is-sticky">
                <div className="container">
                    <Link to="/" className="logo">
                        <img src={Logo} className="inline-block dark:hidden h-7" alt="HeaderLogo" />
                        <img src={Logo} className="hidden dark:inline-block" alt="HeaderLogo" />
                    </Link>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <button className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <ul className="buy-button list-none mb-0">
                        <li className="inline mb-0">
                            <Link to="/Porfolio" className="btn btn-icon w-32 rounded-full btn-primary btn-soft">
                                My Porfolio
                            </Link>
                        </li>
                    </ul>
                    <div id="navigation">
                        <div className="navigation-menu">
                            {
                                headerMenu.map((item) => {
                                    return (
                                        <li id={item.menuId} key={item.menuId} className={
                                            item.menuTo ===  url ? ("active") :("")



                                        }>
                                            <NavLink  to={item.menuTo} key={item.menuId}  >{item.menuName}</NavLink>
                                        </li>
                                    )
                                })

                            }
                        </div>
                    </div>
                </div>
                <div className="relative rotate-180">
                    <div className="shape overflow-hidden text-white dark:text-slate-900">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;
