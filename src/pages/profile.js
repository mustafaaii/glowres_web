import { Link } from "react-router-dom";
import Weblink from "../assets/img/icons/weblink.svg";
import Upwork from "../assets/img/icons/upwork.svg";
import Adopen from "../assets/img/icons/adopen.svg";
import Akademi from "../assets/img/icons/akademi.svg";
import Karacan from "../assets/img/icons/karacan.svg";
import Plugins from "../assets/img/icons/plugins.svg";
import Wordpress from "../assets/img/icons/wordpress.svg";
import Database from "../assets/img/icons/database.svg";
import Admin from "../assets/img/icons/admin.svg";
import Webapp from "../assets/img/icons/application.svg";
import Desing from "../assets/img/icons/desing.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Seo from "../components/seo";


const Profile = () => {

    const skillData = [
        {
            id: 0,
            title: "UX / UI Design",
            text: "The phrasal sequence of the is now so that many campaign and benefit",
            img: <img src={Desing} className="h-12" alt="UX / UI Design" />,
            to: "/ux-ui-design/01202022",
        },
        {
            id: 1,
            title: "Web Application",
            text: "The phrasal sequence of the is now so that many campaign and benefit",
            img: <img src={Webapp} className="h-12" alt="Web Application" />,
            to: "/wep-application/02202022",
        },
        {
            id: 2,
            title: "Admin Panel",
            text: "The phrasal sequence of the is now so that many campaign and benefit",
            img: <img src={Admin} className="h-12" alt="Admin Panel" />,
            to: "/admin-panel/03202022",
        },
        {
            id: 3,
            title: "Database Setup",
            text: "The phrasal sequence of the is now so that many campaign and benefit",
            img: <img src={Database} className="h-12" alt="Database Setup" />,
            to: "/database-setup/04202022",
        },
        {
            id: 4,
            title: "Wordpess Sites",
            text: "The phrasal sequence of the is now so that many campaign and benefit",
            img: <img src={Wordpress} className="h-12" alt="Wordpess Sites" />,
            to: "/wordpress-sites/05202022",
        },
        {
            id: 5,
            title: "Plug-In Design",
            text: "The phrasal sequence of the is now so that many campaign and benefit",
            img: <img src={Plugins} className="h-12" alt="Plug-In Design" />,
            to: "/plug-in-design/06202022",
        }
    ]
    const FrontEndSkill = [
        {
            id: 0,
            skill: <><span className="text-gray-600">Javascript</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 1,
            skill: <><span className="text-gray-600">React JS</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 2,
            skill: <><span className="text-gray-600">Next JS</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 3,
            skill: <><span className="text-gray-600">Jquery</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 4,
            skill: <><span className="text-gray-600">Ajax</span><span className="float-right text-slate-300"></span></>,
        }
    ]
    const FrontEndLibrary = [
        {
            id: 0,
            skill: <><span className="text-gray-600">Bootstrap CSS</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 1,
            skill: <><span className="text-gray-600">Tailwind CSS</span><span className="float-right text-slate-300"></span></>,
        }
    ]
    const FrontEndData = [
        {
            id: 0,
            skill: <><span className="text-gray-600">JSON</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 1,
            skill: <><span className="text-gray-600">XML</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 2,
            skill: <><span className="text-gray-600">Rest Api</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 3,
            skill: <><span className="text-gray-600">Soap</span><span className="float-right text-slate-300"></span></>,
        }
    ]
    const BackEnd = [
        {
            id: 0,
            skill: <><span className="text-gray-600">Php</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 1,
            skill: <><span className="text-gray-600">C#</span><span className="float-right text-slate-300"></span></>,
        }
    ]
    const DesingEnd = [
        {
            id: 0,
            skill: <><span className="text-gray-600">Photoshop</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 1,
            skill: <><span className="text-gray-600">After Effects</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 2,
            skill: <><span className="text-gray-600">Indesign</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 2,
            skill: <><span className="text-gray-600">Figma</span><span className="float-right text-slate-300"></span></>,
        }
    ]
    const DataType = [
        {
            id: 0,
            skill: <><span className="text-gray-600">Sql</span><span className="float-right text-slate-300"></span></>,
        },
        {
            id: 1,
            skill: <><span className="text-gray-600">MySql</span><span className="float-right text-slate-300"></span></>,
        }
    ]
    const experinceData = [
        {
            id: 0,
            company: "Karacan Eğitim Kurumları",
            logo: Karacan,
            to: "https://www.antalyakaracan.com",
            date: "2010-2012",
            jobs: "Front-End Designer",
            text: "I worked as a front end designer in the process of converting the desktop student automation to a web application of the company I work for.",
        },
        {
            id: 1,
            company: "Karacan Mutfak Akademisi",
            logo: Karacan,
            to: "https://mutfaksanatlari.akademidunyasi.com.tr/",
            date: "2012-2014",
            jobs: "Full Stack Developer",
            text: "As a Senior Full Stack Developer in the Executive Position of the Institution I work for, I designed and coded the website and the Student Management Panel.",
        },
        {
            id: 2,
            company: "Akademi Dünyası",
            logo: Akademi,
            to: "https://akademidunyasi.com.tr/",
            date: "2014-2016",
            jobs: "Full Stack Developer",
            text: "I took part in the Project section of the company I work for, Online Education sales automation and E-Commerce website. Developments continued over a period of 1-2 years.",
        },
        {
            id: 3,
            company: "Adopen",
            logo: Adopen,
            to: "http://www.adopen.com.tr/",
            date: "2016-2018",
            jobs: "Full Stack Developer",
            text: "In the company I work for, I took part in the development and updating of web management panels.",
        },
        {
            id: 4,
            company: "Upwork",
            logo: Upwork,
            to: "https://www.upwork.com/freelancers/~01bcd5e6fb2f850040?s=1110580755107926016",
            date: "2018-2022",
            jobs: "Full Stack Developer",
            text: "I have been running projects through Upwork as a Freelhancer for the last 3 years.",
        },

    ]

    return (
        <>

            <Seo
                Pagetitle={"Porfolio | Glowres"}
                Pagedescription={"I do Frontend & Backend Development - Wordpress & Plugin Design. I do custom Wordpress plugins, web design, backend coding"}
                Pagekeywords={"Frontend, Backend, Wordpress, Plugins, Full Stack Developer"}
            />

            <section className="relative table w-full py-36 pb-0 lg:py-24 lg:pb-0" style={{ background: `url(${require('../assets/img/hero/bg.png')}) center center no-repeat`, backgroundColor: "#4f46e5" }}>
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <img src={require("../assets/img/profile/photo.jpg")} className="rounded-full bg-white h-52 w-52 text-center mx-auto" alt="" />
                        <h3 className="mb-2 md:text-2xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white mt-5">
                            <span className="text-slate-400 font-medium" style={{ color: "#" }}> Hello I'am,</span> <span className="font-bold text-white"> Mustafa Işık</span>
                        </h3>
                        <p className="mb-6 md:text-lg text-lg md:leading-normal leading-normal font-medium text-black dark:text-white mt-2 text-white">
                            I am a full stack developer with 8 years of experience. <br />
                            I started the software industry with the C programming language. <br />
                            I started my first sectoral career as a Front-End Developer. <br />
                            I continued my career as a full stack developer in the following years.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative">
                <div className="absolute block w-full h-auto bottom-[25px] z-1 left-0">
                    <a href="#about">
                        <FontAwesomeIcon icon={faCaretDown} className="absolute top-0 left-0 right-0 h-10 w-10 text-center inline-flex text-primary-600 items-center justify-center rounded-full bg-white dark:bg-slate-900 mx-auto shadow-md dark:shadow-gray-700" />
                    </a>
                </div>
                <div className="shape overflow-hidden text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </section>

            <section className="relative md:py-2 py-2 pb-20" id="about">
                <div className="container md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-primary-600 text-sm font-bold uppercase mb-2">My Knowledge Experience</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">What Can I Do ?</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">What have I done so far with my 8 years of experience ?  <br /> I took part in many large and small projects in the process of evolving into new technologies.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-1 gap-[30px]">
                        {
                            skillData.map((item) => {
                                return (
                                    <div key={item.id} className="p-2 border border-slate-50 hover:shadow-xl mt-2 hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl">
                                        <div className="grid grid-flow-col gap-0">
                                            <div className="col-span-1">
                                                <div className="w-16 h-16 bg-primary-600/5 text-primary-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700">
                                                    {item.img}
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="content mt-5">
                                                    <div className="title h5 text-lg font-medium hover:text-primary-600">{item.title}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <br /><br /><br />

            <section className="relative">
                <div className="shape overflow-hidden text-white dark:text-slate-900 rotate-180 border-0" style={{ border: "#fff" }}>
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "#6058e8" }}>
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" className=" border-0" fill="currentColor"></path>
                    </svg>
                </div>
            </section>

            <section className="relative md:py-24 py-16" style={{ background: "url('assets/images/crypto/bg2.jpg') top center no-repeat" }}>
                <div className="absolute inset-0 bg-primary-600/90"></div>

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6">
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">Front End</span>
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium" style={{ color: "#ebb400" }}> Technologies</span>
                        </h3>
                        <p className="text-white/70 max-w-xl mx-auto">Font End Technologies I Have Experienced.</p>
                    </div>
                    <div className="flex lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-[30px] flex-wrap justify-center">
                        {
                            FrontEndSkill.map((item) => {
                                return (
                                    <div className="">
                                        <div className="flex transition-all duration-500  shadow  dark:shadow-gray-700  dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md border border-dashed text-white text-center dark:bg-slate-900 w-44">
                                            <div className="flex-1">
                                                <h4 className="mb-0 text-lg font-medium">{item.skill}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <br /><br />
                <div style={{ border: "dashed 1px" }}></div>
                <br />

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6">
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">Front End Design</span>
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium" style={{ color: "#ebb400" }}> Library</span>
                        </h3>
                        <p className="text-white/70 max-w-xl mx-auto">Front end technologies that I always prefer and use in a multi-project.</p>
                    </div>
                    <div className="flex lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] flex-wrap justify-center">
                        {
                            FrontEndLibrary.map((item) => {
                                return (
                                    <div className="">
                                        <div className="flex transition-all duration-500  shadow  dark:shadow-gray-700  dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md border border-dashed text-white text-center dark:bg-slate-900 w-44">
                                            <div className="flex-1">
                                                <h4 className="mb-0 text-lg font-medium">{item.skill}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <br /><br />
                <div style={{ border: "dashed 1px" }}></div>
                <br />

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6">
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">Front End </span>
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium" style={{ color: "#ebb400" }}> Data Type & Transfer</span>
                        </h3>
                        <p className="text-white/70 max-w-xl mx-auto">Data types and transfer protocols that I use and integrate in integration works from my customers and within the businesses I work.</p>
                    </div>
                    <div className="flex lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] flex-wrap justify-center">
                        {
                            FrontEndData.map((item) => {
                                return (
                                    <div className="">
                                        <div className="flex transition-all duration-500  shadow  dark:shadow-gray-700  dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md border border-dashed text-white text-center dark:bg-slate-900 w-40">
                                            <div className="flex-1">
                                                <h4 className="mb-0 text-lg font-medium">{item.skill}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <br /><br />
                <div style={{ border: "dashed 1px" }}></div>
                <br />

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6">
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">Back End </span>
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium" style={{ color: "#ebb400" }}> Technologies</span>
                        </h3>
                        <p className="text-white/70 max-w-xl mx-auto">I started the Back End coding language with C, and I took part in certain processes in producing .NET solutions with C#. I continued my next 6 years with PHP in back end technologies.</p>
                    </div>
                    <div className="flex lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] flex-wrap justify-center">
                        {
                            BackEnd.map((item) => {
                                return (
                                    <div className="">
                                        <div className="flex transition-all duration-500  shadow  dark:shadow-gray-700  dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md border border-dashed text-white text-center dark:bg-slate-900 w-40">
                                            <div className="flex-1">
                                                <h4 className="mb-0 text-lg font-medium">{item.skill}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <br /><br />
                <div style={{ border: "dashed 1px" }}></div>
                <br />

                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6">
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">Data </span>
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium" style={{ color: "#ebb400" }}> Storage</span>
                        </h3>
                        <p className="text-white/70 max-w-xl mx-auto">I used both technologies in database architecture.</p>
                    </div>
                    <div className="flex lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] flex-wrap justify-center">
                        {
                            DataType.map((item) => {
                                return (
                                    <div className="">
                                        <div className="flex transition-all duration-500  shadow  dark:shadow-gray-700  dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md border border-dashed text-white text-center dark:bg-slate-900 w-40">
                                            <div className="flex-1">
                                                <h4 className="mb-0 text-lg font-medium">{item.skill}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <br /><br />
                <div style={{ border: "dashed 1px" }}></div>
                <br />


                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h3 className="mb-6">
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-white">Design  </span>
                            <span className="md:text-3xl text-2xl md:leading-normal leading-normal font-medium" style={{ color: "#ebb400" }}> Technologies</span>
                        </h3>
                        <p className="text-white/70 max-w-xl mx-auto">Besides my Full Stack developer profession, I used the following design tools.</p>
                    </div>
                    <div className="flex lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] flex-wrap justify-center">
                        {
                            DesingEnd.map((item) => {
                                return (
                                    <div className="">
                                        <div className="flex transition-all duration-500  shadow  dark:shadow-gray-700  dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md border border-dashed text-white text-center dark:bg-slate-900 w-40">
                                            <div className="flex-1">
                                                <h4 className="mb-0 text-lg font-medium">{item.skill}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>








            </section>

            <section className="relative">
                <div className="shape overflow-hidden text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </section>



            <section className="relative md:py-24 py-16  bg-gray-50 dark:bg-slate-800">
                <div className="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
                        <h6 className="text-primary-600 text-sm font-bold uppercase mb-2">My Work Experiences</h6>
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Here's My Experience</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">Where have I worked so far? <br />You can take a look at my professional experience.</p>
                    </div>

                    <div className="grid grid-cols-1 mt-8">
                        <div className="timeline relative">
                            {
                                experinceData.map((item) => {
                                    return (
                                        <div key={Math.random().toString(36)}>
                                            {
                                                item.id % 2 === 1 ?
                                                    (
                                                        <div className="timeline-item mt-16 mb-10 ">
                                                            <div className="grid sm:grid-cols-2">
                                                                <div className="">
                                                                    <div className="duration date-label-left md:text-right md:mr-8 relative">
                                                                        <img src={item.logo} className="rounded-full h-9 w-9 md:ml-auto" alt="" />
                                                                        <h5 className="my-2 font-semibold">
                                                                            <Link to={item.to} target="_blank" className="text-primary-600">
                                                                                <span><img src={Weblink} className="h-3 float-left mr-2" style={{ marginTop: "5px" }} alt="" /></span>
                                                                                <span className="float-left">{item.company}</span>
                                                                            </Link>
                                                                        </h5>
                                                                        <h6 className="text-slate text-sm mb-0">{item.date}</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-4 md:mt-0">
                                                                    <div className="event event-description-right float-left text-left md:ml-8">
                                                                        <h5 className="title mb-1 font-semibold"><b>{item.jobs}</b></h5>
                                                                        <p className="timeline-subtitle mt-6 mb-0 text-slate-400">{item.text}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div className="timeline-item mt-10 mb-10">
                                                            <div className="grid sm:grid-cols-2">
                                                                <div className="md:order-1 order-2">
                                                                    <div className="event event-description-left float-left text-right md:mr-8">
                                                                        <h5 className="title mb-1 font-semibold"><b>{item.jobs}</b></h5>
                                                                        <p className="timeline-subtitle mt-6 mb-0 text-slate-400">{item.text}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="md:order-2 order-1">
                                                                    <div className="duration duration-right md:ml-8 relative">
                                                                        <img src={item.logo} className="rounded-full h-9 w-9" alt="" />
                                                                        <h5 className="my-2 font-semibold">
                                                                            <Link to={item.to} target="_blank" className="text-primary-600">
                                                                                <span className="float-left">{item.company}</span>
                                                                                <span><img src={Weblink} className="h-3 float-left ml-2" style={{ marginTop: "5px" }} alt="" /></span>
                                                                            </Link>
                                                                        </h5>
                                                                        <p className="text-slate text-sm mb-0">{item.date}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Profile;