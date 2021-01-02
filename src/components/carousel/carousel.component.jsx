import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.style.css';
import Slide1 from '../../assets/carousel/slide1.jpg';
import Slide2 from '../../assets/carousel/slide2.jpg';
import Slide3 from '../../assets/carousel/slide3.jpg';
import Slide4 from '../../assets/carousel/slide4.jpg';
import Slide5 from '../../assets/carousel/slide5.jpg';
import Slide6 from '../../assets/carousel/slide6.jpg';
import Slide7 from '../../assets/carousel/slide7.jpg';
import Slide8 from '../../assets/carousel/slide8.jpg';
import Slide9 from '../../assets/carousel/slide9.jpg';
import Slide10 from '../../assets/carousel/slide10.jpg';
import ScrollDown from "../scroll-down/scroll-down.component";

export const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide2}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 custom-img"
                        src={Slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <ScrollDown />
        </div>
    )
}

export default MyCarousel;