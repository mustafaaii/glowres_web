


import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faCaretRight, faMessage, faUser, faMailBulk } from "@fortawesome/free-solid-svg-icons";


import { Helmet } from "react-helmet";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import contactImage from "../assets/img/contact/contact.svg"
import Upwork from "../assets/img/contact/upwork.svg";

import Videohive from "../assets/img/contact/videohive.svg";
import Seo from "../components/seo";
import Hero from "../components/hero";


const Contact = () => {
    const [contacData] = useState([
        {
            id: 0,
            title: "Upwork",
            text: "Review Me on Upwork",
            bottomtext: "Mustafa Işık",
            icon: <img src={Upwork} className="h-7" />,
            to: "https://www.upwork.com/freelancers/~01bcd5e6fb2f850040",
            totitle: "Upwork Profile",
        },
        {
            id: 1,
            title: "Linkedin",
            text: "Review Me on Linkedin",
            bottomtext: "Mustafa Işık",
            icon: <FontAwesomeIcon icon={faLinkedin} />,
            to: "https://www.linkedin.com/in/mustafa-i%C5%9F%C4%B1k-765a90183/",
            totitle: "Linkedin Profile",
        },
        {
            id: 2,
            title: "Videohive ",
            text: "Review Me on Videohive",
            bottomtext: "magemotion",
            icon: <img src={Videohive} className="h-7" />,
            to: "https://videohive.net/user/magemotion/portfolio",
            totitle: "Videohive Profile",
        },
        {
            id: 3,
            title: "Github",
            text: "Send Direct Message",
            bottomtext: "",
            icon: <FontAwesomeIcon icon={faGithub} />,
            to: "https://github.com/mustafaaii?tab=repositories",
            totitle: "Github Profile",
        }
    ])
    return (
        <>
            <Seo
                Pagetitle={"Blog | Glowres"}
                Pagedescription={"I do Frontend & Backend Development - Wordpress & Plugin Design. I do custom Wordpress plugins, web design, backend coding"}
                Pagekeywords={"Frontend, Backend, Wordpress, Plugins, Full Stack Developer"}
            />

            <Hero description={"See which Platforms I operate on and you can contact me."} page={"Contact"} />

            <section className="relative md:py-24 py-16">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-[30px]">
                        {
                            contacData.map((item) => {
                                return (
                                    <div key={item.id} className="border-1 shadow rounded-md p-3">
                                        <div key={item.id} className="text-center px-6 mt-6">
                                            <div className="w-20 h-20 bg-primary-600/5 text-primary-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-700 mx-auto">
                                                {item.icon}
                                            </div>
                                            <div className="content mt-7">
                                                <h5 className="title h5 text-xl font-medium">{item.title}</h5>
                                                <p className="text-slate-400 mt-3">{item.text}</p>
                                                <div className="mt-5">
                                                    <a
                                                        target={"_blank"}
                                                        href={item.to}
                                                        key={item.id}
                                                        className="btn btn-link text-primary-600 hover:text-primary-600 after:bg-primary-600 transition duration-500"
                                                    >{item.totitle}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>


                <div className="container md:mt-24 mt-16">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <img key={"sad2311"} src={contactImage} className="" alt="" />
                        </div>
                        <div className="lg:col-span-5 md:col-span-6 mt-8 md:mt-0">
                            <div className="lg:ml-5">
                                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Get in touch !</h3>


                                    <form method="post" name="myForm" id="myForm" >
                                        <p className="mb-0" id="error-msg"></p>
                                        <div id="simple-msg"></div>
                                        <div className="grid lg:grid-cols-12 lg:gap-6">


                                            <div className="lg:col-span-12">
                                                <div className="text-left">
                                                    <label htmlFor="name" className="font-semibold text-sm">Your Name:</label>
                                                    <div className="form-icon relative">
                                                        <FontAwesomeIcon icon={faUser} className="w-4 h-4 absolute top-3 left-4" />
                                                        <input
                                                            name={"name"}
                                                            id={"name"}
                                                            type={"text"}
                                                            className={"form-input pl-11"}
                                                            placeholder={"Name :"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-12">
                                                <div className="text-left">
                                                    <label htmlFor="email" className="font-semibold text-sm">Your Email:</label>
                                                    <div className="form-icon relative">
                                                        <FontAwesomeIcon icon={faMailBulk} className="w-4 h-4 absolute top-3 left-4" />
                                                        <input
                                                            name={"email"}
                                                            id={"email"}
                                                            type={"email"}
                                                            className={"form-input pl-11"}
                                                            placeholder={"Email :"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-12">
                                                <div className="text-left">
                                                    <label htmlFor="subject" className="font-semibold text-sm">Your Question:</label>
                                                    <div className="form-icon relative">
                                                        <FontAwesomeIcon icon={faBook} className="w-4 h-4 absolute top-3 left-4" />
                                                        <input
                                                            name={"subject"}
                                                            id={"subject"}
                                                            type={"email"}
                                                            className={"form-input pl-11"}
                                                            placeholder={"Subject :"}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-12">
                                                <div className="text-left">
                                                    <label htmlFor="comments" className="font-semibold text-sm">Your Comment:</label>
                                                    <div className="form-icon relative">
                                                        <FontAwesomeIcon icon={faMessage} className="w-4 h-4 absolute top-3 left-4" />
                                                        <textarea
                                                            name={"comments"}
                                                            id={"comments"}
                                                            type={""}
                                                            className={"form-input pl-11 textarea"}
                                                            placeholder={"Message :"}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-12 mb-5">
                                                <button
                                                    key={"message"}
                                                    className="btn btn-primary rounded-md justify-center flex items-center"
                                                    id="submit"
                                                    type="submit"
                                                    name="send">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;