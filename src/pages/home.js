import { faCircleDot, faDesktop, faMailBulk, faPaperclip, faUser, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


import ReactJS from "../assets/img/tech/reactjs.svg";
import VueJS from "../assets/img/tech/vuejs.svg";
import Html from "../assets/img/tech/html.svg";
import Php from "../assets/img/tech/php.svg";
import Tailwind from "../assets/img/tech/tailwindcss.svg";
import Bootstrap from "../assets/img/tech/bootstrap.svg";
import Wordpress from "../assets/img/tech/wordpress.svg";

import ReactjsDesing from "../assets/img/design/reactjs.svg";
import TailwindDesing from "../assets/img/design/tailwind.svg";
import FigmaDesing from "../assets/img/design/figma.svg";
import Seo from "../components/seo";
const Home = () => {

    const technologyData = [
        {
            id: "11172021",
            image: ReactJS,
            to: "/react-js/11172021",
        },
        {
            id: "11172022",
            image: VueJS,
            to: "/vue-js/11172022",
        },
        {
            id: "11172023",
            image: Html,
            to: "/html/11172023"
        },
        {
            id: "11172024",
            image: Php,
            to: "/php-7-4/11172024",
        },
        {
            id: "11172024",
            image: Tailwind,
            to: "/tailwind-css/11172024",
        },
        {
            id: "11172025",
            image: Bootstrap,
            to: "/bootstrap/11172025",
        },
        {
            id: "11172026",
            image: Wordpress,
            to: "/wordpress/11172026",
        },
    ];
    const ServicesData = [
        {
            id: "01062022",
            title: "Web App & Design",
            text: "I Design / Code Web Applications and Sites. If you wish, I can also make Wordpress Sites or Plugins.",
            icon: faDesktop,
            to: "/web-app-&-design/01062022",
        },
        {
            id: "02062022",
            title: "Management Panel Design",
            text: "I write management panels, which are indispensable for specially designed websites.",
            icon: faPaperclip,
            to: "/management-panel-design/02062022",

        },
        {
            id: "03062022",
            title: "Motion Graphic Design",
            text: "I design special motion video projects for you to promote your web applications, business and projects.",
            icon: faVideo,
            to: "/motion-graphic-design/03062022",
        }

    ];

    return (
        <>
            <Seo
                Pagetitle={"Frontend & Backend Development - Wordpress & Plugin Design | Glowres"}
                Pagedescription={"I do Frontend & Backend Development - Wordpress & Plugin Design. I do custom Wordpress plugins, web design, backend coding"}
                Pagekeywords={"Frontend, Backend, Wordpress, Plugins, Full Stack Developer"}
            />
            <section className={`relative table w-full py-36 lg:py-24 bg-gray-50 dark:bg-slate-800 bg-bottom`} style={{ background: `url(${require("../assets/img/hero/hero.png")})` }}>
                <div className="container">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-[30px]">
                        <div className="lg:col-span-7">
                            <span className="bg-primary-600/5 text-primary-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">Short content about me</span>
                            <h6 className="font-semibold lg:leading-normal leading-normal text-3xl lg:text-4xl mt-2 mb-5">
                                I Make Modern and Aesthetic <br />Software Projects
                            </h6>
                            <p className="text-slate-400 text-lg max-w-xl">
                                Hello, I'm Mustafa Işık, This is my personal website. Here I present to you my personal portfolio of my Job.
                            </p>
                            <div className="relative mt-10">
                                <button to="/porfolio" className="btn btn-primary rounded-full mr-1">
                                    View My Profile
                                </button>
                            </div>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-700 md:p-8 p-6 lg:ml-10 z-10 relative">
                                <h4 className="mb-5 text-2xl font-semibold">Contact me for the project</h4>
                                <form>
                                    <div className="grid grid-cols-1">
                                        <div className="mb-5">
                                            <label className="form-label font-medium">Your Name & Surname: <span className="text-danger-600">*</span></label>
                                            <div className="form-icon relative mt-2">
                                                <FontAwesomeIcon icon={faUser} className="w-4 h-4 absolute top-3 left-4" />
                                                <input type="text" className="form-input pl-12" placeholder="Name & Surname" name="name" required="" />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label className="form-label font-medium">Your Email : <span className="text-danger-600">*</span></label>
                                            <div className="form-icon relative mt-2">
                                                <FontAwesomeIcon icon={faMailBulk} className="w-4 h-4 absolute top-3 left-4" />
                                                <input type="email" className="form-input pl-12" placeholder="Email" name="email" required="" />
                                            </div>
                                        </div>
                                        <div>
                                            <button to="/" className="btn btn-primary rounded-md mt-3 active w-full">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </section>
            <section className="relative py-2 lg:py-2">
                <div className="container">
                    <div className="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px] ">
                        {
                            ServicesData.map((item) => {
                                return (
                                    <Link key={item.id} to={item.to} className="group text-center border border-slate-200 p-5 rounded-lg hover:border-none hover:shadow-md transition-all duration-500">
                                        <div className="w-20 h-20 bg-primary-600/5 text-primary-600 rounded-lg rotate-[15deg] flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 mx-auto">
                                            <FontAwesomeIcon icon={item.icon} className="w-7 h-7 -rotate-[15deg]" />
                                        </div>
                                        <div className="mt-8">
                                            <div className="title h5 text-lg font-medium hover:text-primary-600">{item.title}</div>
                                            <p className="text-slate-400 mt-4" style={{ height: "100px" }}>{item.text}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            <section className="relative md:py-2 py-2 mb-5">
                <div className="bg-gray-50 dark:bg-slate-800 py-36 lg:py-24">
                    <div className="container md:mt-5 mt-5 py-5 lg:py-5 ">
                        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
                            <div className="lg:col-span-7 mt-8 md:mt-0">
                                <div className="lg:ml-10">
                                    <h6 className="text-primary-600 text-sm font-bold uppercase mb-2">Modern Libraries</h6>
                                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Vue JS & React Js</h3>
                                    <p className="text-slate-400 max-w-xl">I can design your projects with Vue JS or React JS. I am very experienced with these two technologies, which are more modern and aesthetic front-end languages ​​and are increasing in popularity day by day.</p>


                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <img src={ReactjsDesing} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container md:mt-5 mt-5 py-36 lg:py-24">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-6">
                            <div className="lg:mr-8">
                                <img src={TailwindDesing} alt="" />
                            </div>
                        </div>
                        <div className="md:col-span-6 mt-8 md:mt-0">
                            <div className="lg:ml-5">
                                <h6 className="text-primary-600 text-sm font-bold uppercase mb-2">Modern Libraries</h6>
                                <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold"> Tailwind CSS & Bootstrap</h3>
                                <p className="text-slate-400 max-w-xl mb-6">
                                    I am quite familiar with 2 css libraries. I've done projects for both of them for a long time.
                                    Bootstrap's Column Logic provides Tailwind Grid logic and snipers a slightly different concept.
                                    Both help to create more aesthetic, more modern designs in their own field.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 dark:bg-slate-800 py-36 lg:py-24">
                    <div className="container md:mt-5 mt-5 py-5 lg:py-5">
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                            <div className="md:col-span-6 order-1 md:order-2">
                                <div className="lg:ml-8">
                                    <img src={FigmaDesing} alt="" />
                                </div>
                            </div>
                            <div className="md:col-span-6 mt-8 md:mt-0 order2 md:order-1">
                                <div className="lg:ml-5">
                                    <h6 className="text-primary-600 text-sm font-bold uppercase mb-2">Figma</h6>
                                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Front End Development<br />from Figma</h3>
                                    <p className="text-slate-400 max-w-xl">
                                        I can produce your Figma designs in front end development. Be it front-end development or purely full stack development.
                                    </p>
                                    <ul className="list-none text-slate-400 my-6">
                                        <li className="mb-1 flex"><FontAwesomeIcon icon={faCircleDot} className="text-primary-600 text-sm mr-2 mt-1" /> From Figma to Wordpress Theme Designs</li>
                                        <li className="mb-1 flex"><FontAwesomeIcon icon={faCircleDot} className="text-primary-600 text-sm mr-2 mt-1" /> From Figma to Custom Software Projects</li>
                                        <li className="mb-1 flex"><FontAwesomeIcon icon={faCircleDot} className="text-primary-600 text-sm mr-2 mt-1" /> From Figma to Plugin Designs</li>
                                        <li className="mb-1 flex"><FontAwesomeIcon icon={faCircleDot} className="text-primary-600 text-sm mr-2 mt-1" /> From Figma to Admin Panel Designs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;