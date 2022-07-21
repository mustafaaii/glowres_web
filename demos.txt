import { Link, useParams } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
const Navigation = (props) => {

    const { id } = useParams();
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 3,
            type: "desktop"
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2,
            type: "tablet"
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 1,
            type: "mobile"
        }
    };

    const val = useState();
    useEffect(() => {
        val = props.val;
    })

    return (
        <>
            <div className="grid grid-flow-col auto-cols-max gap-4 text-center items-center  mb-5">
                <Carousel
                    key={props.keys}
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    arrows={false}
                    autoPlay={false}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    containerClass="carousel-container"
                    transitionDuration={3000}
                >
                    {
                        val.map((item) => {
                            return (
                                <Link to={item.to} key={item.id}>
                                    <div className={`${props.class} ${item.id === id ? ("bg-primary-600 text-white") : ("")}`}>
                                        {item.title}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    )
}
export default Navigation;