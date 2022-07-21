import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = ({ page, description }) => {
    return (
        <>
            <section className="relative table w-full py-36 pb-0 lg:py-24 lg:pb-0" style={{ background: `url(${require('../assets/img/hero/bg.png')}) center center no-repeat`, backgroundColor: "#4f46e5" }}>
                <div class="container">
                    <div class="grid grid-cols-1 pb-2 text-center mt-2">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-white text-2xl leading-normal font-semibold">{page}</h3>
                        <p className="max-w-xl mx-auto text-white">{description}</p>
                    </div>
                </div>
                <div class="mb-8 text-center z-10 mt-5 pb-5 bottom-5 right-0 left-0 mx-3">
                    <ul class="breadcrumb breadcrumb-light mb-0 inline-block">
                        <li class="inline breadcrumb-item capitalize"><a href='/'>Glowres</a></li>
                        <li class="inline breadcrumb-item"><a ><FontAwesomeIcon icon={faCaretRight} /></a></li>
                        <li class="inline breadcrumb-item active capitalize " aria-current="page">{page}</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}
export default Hero;