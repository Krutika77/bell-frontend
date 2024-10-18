import React, { useEffect, useState } from "react";
import './HeroCarousel.scss';

const HeroCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lastScrollTime, setLastScrollTime] = useState(0);
    const slides = [
        {
            title: "Introducing Bell for Better",
            description: "From support for mental health and protecting the environment, to accessibility and privacy, we are investing in society for a better tomorrow.",
            link: "https://www.bell.ca/Bell-for-Better",
            image: 'https://www.bell.ca/Styles/assets/images/bottom_image.jpg',
        },
        {
            title: "Moving mental health forward",
            description: "Bell Let’s Talk has a vision of a Canada where everyone can get the mental health support they need",
            link: "https://letstalk.bell.ca/",
            image: 'https://media.graphassets.com/resize=width:1920,height:1432,fit:crop/output=format:webp/CgfJy3ckSlCCjJwsLaPG',
        },
        {
            title: "BELL Accessibility services centre",
            description: "Products and services with your needs in mind like voice control, call management and personalized accessibility settings.",
            link: "https://www.bell.ca/Accessibility_services#INT=OTH_Accessserv_TXT_FedNav",
            image: 'https://fs.npstatic.com/userfiles/7613938/image/AccessibilityAndroid.png',
        }
    ];

    const handleScroll = (event) => {
        event.preventDefault(); 

        const currentTime = new Date().getTime();
        if (currentTime - lastScrollTime < 1000) return; 

        setLastScrollTime(currentTime);

        // Determine the scroll direction
        if (event.deltaY > 0) {
            // Scroll down
            setActiveIndex((prevIndex) => Math.min(prevIndex + 1, slides.length - 1));
        } else {
            // Scroll up
            setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [lastScrollTime]);

    return (
        <div className="hero-carousel">
            <div className="hero-carousel__container">
                {slides.map((slide, index) => (
                    <div
                        className={`hero-carousel__item ${index === activeIndex ? "active" : ""}`}
                        key={index}
                    >
                        <div className="hero-carousel__text-container">
                            <h2 className="hero-carousel__slide-title">{slide.title}</h2>
                            <p className="hero-carousel__slide-description">{slide.description}</p>
                            <a href={slide.link} className="hero-carousel__slide-button">Learn More</a>
                        </div>
                        <div className="hero-carousel__image-container">
                            <img src={slide.image} alt={slide.title} className="hero-carousel__slide-image" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
