import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import How from "../../images/how.jpg";
import "../Slide/slide2.css";

const Slide2 = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 480, itemsToShow: 1 },
        { width: 800, itemsToShow: 1 },
        { width: 1024, itemsToShow: 1 },
    ];

    const carouselRef = useRef(null);

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    return (
        <div className="slide-container">
            <Carousel
                itemsToScroll={1}
                itemsToShow={1}
                itemPadding={[10, 10]}
                // enableAutoPlay
                // autoPlaySpeed={1500}
                outerSpacing={0}
                breakPoints={breakPoints}
                ref={carouselRef}
            >
                <div className="how container">
                    <img src={How} alt="" />
                    <div className="how-text">
                        <h3>How can we help you?</h3>
                        <i>
                            The knowledge hub for teens on all things sexual
                            health
                        </i>
                    </div>
                    <FaAngleRight
                        className="how-arrow"
                        onClick={handleNextClick}
                    />
                </div>

                <div className="how container">
                    <img src={How} alt="" />
                    <div className="how-text">
                        <h3>How can we help you?</h3>
                        <i>
                            The knowledge hub for teens on all things sexual
                            health
                        </i>
                    </div>
                    <FaAngleRight
                        className="how-arrow"
                        onClick={handleNextClick}
                    />
                </div>

                <div className="how container">
                    <img src={How} alt="" />
                    <div className="how-text">
                        <h3>How can we help you?</h3>
                        <i>
                            The knowledge hub for teens on all things sexual
                            health
                        </i>
                    </div>
                    <FaAngleRight
                        className="how-arrow"
                        onClick={handleNextClick}
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Slide2;
