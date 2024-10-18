import React, { useEffect, useState } from "react";
import './HeroCarousel.scss';
import image1 from '../../assets/images/carousel/image-1.png';
import image2 from '../../assets/images/carousel/image-2.jpg';
import image3 from '../../assets/images/carousel/image-3.jpg';

const HeroCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lastScrollTime, setLastScrollTime] = useState(0);
    const slides = [
        {
            title: "Bell Let’s Talk Day 2025 to Prioritize Youth Mental Health as Young Canadians Face Growing Crisis",
            description: "Bell unveiled MHRC’s new report on youth mental health and announced it will prioritize youth mental health on Bell Let’s Talk Day (January 22, 2025) and launch a text-to-donate campaign with 100% of funds raised going to six youth mental health providers.",
            link: "https://letstalk.bell.ca/news/bell-lets-talk-day-2025-to-prioritize-youth-mental-health-as-young-canadians-face-growing-crisis/",
            image: 'https://media.graphassets.com/resize=width:1920,height:1432,fit:crop/output=format:webp/CgfJy3ckSlCCjJwsLaPG',
        },
        {
            title: "Join Our Community",
            description: "Connect with like-minded individuals.",
            link: "#",
            image: 'https://media.graphassets.com/resize=width:1920,height:1432,fit:crop/output=format:webp/CUmdZn9vRjGdKRw63m9q',
        },
        {
            title: "Stay Updated",
            description: "Subscribe for the latest news.",
            link: "#",
            image: 'https://media.graphassets.com/resize=width:1920,height:1432,fit:crop/output=format:webp/sgBW314CRdCV6fM9H4pN',
        },
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
