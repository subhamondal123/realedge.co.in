'use client'

import ImageConstraint from "@/utils/ImageConstraint";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const arrData = [
    {
        image: ImageConstraint.HOME_BANNER.BANNER_1
    },
    {
        image: ImageConstraint.HOME_BANNER.BANNER_2
    },
    {
        image: ImageConstraint.HOME_BANNER.BANNER_3
    },
]

export default function CustomCarousel({ data }) {
    return (
        <div className="w-full overflow-hidden relative z-10">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                // ssr={true} // means to render carousel on server-side.
                infinite={true}
                // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlay={false}
                // autoPlaySpeed={1000}
                keyBoardControl={true}
                // customTransition="all .5"
                // transitionDuration={500}
                // containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            >
                {arrData.map((item, index) => (
                    <div className="w-full shrink-0 cursor-grab select-none">
                        <img src={item.image}
                            draggable={false}
                            alt='banner'
                            className="w-full h-50 md:h-250 object-cover" />
                        <div className="absolute md:left-36 top-1/2 transform -translate-y-1/2 text-[#5B1629]">
                            <h1 className="text-[#5B1629] text-lg md:text-7xl font-medium">Mere <span className="text-[#A93F00]">GHAR</span> Ka Gehna</h1>
                            <p className="text-xs md:text-4xl mt-1">Steel For Beautiful Grills</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}