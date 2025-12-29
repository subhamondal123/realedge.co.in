'use client'

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

export default function CustomCarousel({ data }) {
    return (
        <div className="w-full flex overflow-hidden">
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
                <div className="w-full shrink-0 cursor-grab select-none">
                    <img src='https://realedge.co.in/adminprod/wp-content/uploads/2024/11/banner1.jpg'
                        draggable={false}
                        alt='banner'
                        className="w-full h-50 md:h-250 object-cover" />
                    <div className="absolute md:left-36 top-1/2 transform -translate-y-1/2 text-[#5B1629]">
                        <h1 className="text-[#5B1629] text-lg md:text-7xl font-medium">Mere <span className="text-[#A93F00]">GHAR</span> Ka Gehna</h1>
                        <p className="text-xs md:text-4xl mt-1">Steel For Beautiful Grills</p>
                    </div>
                </div>
                <div className="w-full shrink-0 cursor-grab select-none">
                    <img src='https://realedge.co.in/adminprod/wp-content/uploads/2024/11/banner2.jpg'
                        draggable={false}
                        alt='banner'
                        className="w-full h-50 md:h-250 object-cover" />
                    <div className="absolute md:left-36 top-1/2 transform -translate-y-1/2 text-[#5B1629]">
                        <h1 className="text-[#5B1629] text-lg md:text-7xl font-medium">Mere <span className="text-[#A93F00]">GHAR</span> Ka Gehna</h1>
                        <p className="text-xs md:text-4xl mt-1">Steel For Beautiful Grills</p>
                    </div>
                </div>
                <div className="w-full shrink-0 cursor-grab select-none">
                    <img src="https://realedge.co.in/adminprod/wp-content/uploads/2024/11/banner3.jpg"
                        draggable={false}
                        alt='banner'
                        className="w-full h-50 md:h-250 object-cover" />
                    <div className="absolute md:left-36 top-1/2 transform -translate-y-1/2 text-[#5B1629]">
                        <h1 className="text-[#5B1629] text-lg md:text-7xl font-medium">Mere <span className="text-[#A93F00]">GHAR</span> Ka Gehna</h1>
                        <p className="text-xs md:text-4xl mt-1">Steel For Beautiful Grills</p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}