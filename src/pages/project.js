
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
const Project = () => {




    return (
        <>
            <section className="relative table w-full py-36 pb-0 lg:py-24 lg:pb-0" style={{ background: `url(${require('../assets/img/hero/bg.png')}) center center no-repeat`, backgroundColor: "#4f46e5" }}>
                <div class="container">
                    <div className="grid grid-cols-1 pb-8 text-center">
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
            <section className="container md:mt-24 mt-16">

                <div className="grid md:grid-cols-1 grid-cols-1 mt-8 gap-[30px]">

                    sadasd

                </div>
            </section>
            <section className="container md:mt-24 mt-16">

                <div className="grid md:grid-cols-1 grid-cols-1 mt-8 gap-[30px]">

                    sadasd

                </div>
            </section>

        </>
    )
}
export default Project;