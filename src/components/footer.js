
import { faInstagram, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo/logo-w.svg";
import Upwork from "../assets/img/brand/safeupwork.svg";
import Videohive from "../assets/img/brand/safevideohive.svg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {

    const socialData = [
        {
            id: 0,
            icon: <FontAwesomeIcon icon={faInstagram} />,
            to: "https://www.instagram.com/glowresdigital/",
        },
        {
            id: 1,
            icon: <FontAwesomeIcon icon={faLinkedin} />,
            to: "https://www.linkedin.com/in/mustafa-i%C5%9F%C4%B1k-765a90183/",
        },
        {
            id: 2,
            icon: <img src={Upwork} className="h-16" />,
            to: "https://www.upwork.com/freelancers/~01bcd5e6fb2f850040",
        },
        {
            id: 2,
            icon: <img src={Videohive} className="h-16" />,
            to: "https://videohive.net/user/magemotion",
        },
        {
            id: 2,
            icon: <FontAwesomeIcon icon={faGithub} />,
            to: "https://videohive.net/user/magemotion",
        },

    ];

    const bottomData = [
        {
            id: 0,
            text: "Terms of Services",
            to: "terms-of-services",
        },
        {
            id: 1,
            text: "Privacy Policy",
            to: "privacy-policy",
        },
        {
            id: 2,
            text: "Documentation",
            to: "documentation",
        },
    ];

    return (
        <>
            <footer className="footer bg-gray-900 dark:bg-gray-footer relative text-gray-200 dark:text-gray-200" style={{marginTop:"-20px"}}>
                <div className="relative text-gray-200 rotate-180" style={{ bottom: "10px" }}>
                    <div className="shape overflow-hidden z-1 dark:text-slate-900" style={{ backgroundColor: "#111827", color:"#f9fafb" }}>
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>
                <div className="py-[30px] px-0 border-t border-gray-800">
                    <div className="container text-center">
                        <div className="grid md:grid-cols-3 grid-cols-1">
                            <div className="text-center">
                                <Link to="/" className="text-[22px] focus:outline-none  text-center items-center">
                                    <img key="footerlogo" src={Logo} className="h-8 margin margin:m-auto" alt="footer-logo" />
                                </Link>
                            </div>
                            <div className="text-center mt-6 md:mt-0">
                                <p className="mb-0">©2022 Glowres. This theme is Designed by Me with React JS.</p>
                            </div>
                            <ul className="list-none md:text-right text-center mt-6 md:mt-0">
                                {
                                    socialData.map((item) => {
                                        return (
                                            <li key={item.id} className="inline">
                                                <a
                                                    target="_blank"
                                                    href={item.to}
                                                    className="btn btn-icon btn-sm border ml-2 !border-gray-800 rounded-md hover:border-primary-600 dark:hover:border-primary-600 hover:bg-primary-600 dark:hover:bg-primary-600" >
                                                    {item.icon}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-2 h-2 px-0 " hidden>
                    <div className="container text-center">
                        <div className="grid md:grid-cols-1 grid-cols-1 items-center">
                            <ul className="list-none md:text-left text-center mt-6 md:mt-0">
                                {
                                    bottomData.map((item) => {
                                        return (
                                            <li key={item.id} className="inline">
                                                <Link to={item.to} className="text-gray-300 hover:text-gray-400 transition-all duration-500 ease-in-out ml-1 mr-4">
                                                    {item.text}
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
