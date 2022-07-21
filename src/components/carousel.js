
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Carousels = ({ Carouseldata }) => {
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

    return (
        <>
            <Carousel
                key={"item.key"}
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
                {Carouseldata}
            </Carousel>
        </>
    )
}
export default Carousels;