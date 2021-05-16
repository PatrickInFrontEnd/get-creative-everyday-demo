import React, { createContext, useEffect, useState } from "react";

export const sliderContext = createContext({
    slides: [],
    length: 0,
    currentSlide: null,
    currentIndex: 0,
    nextSlide: () => {},
    prevSlide: () => {},
    allowedToChangeSlide: false,
    allowChange: () => {},
    prohibitChange: () => {},
});

const SliderProvider = ({ slides, children }) => {
    const [slidesArray] = useState(slides || []);
    const [slidesLength, setLength] = useState(slides?.length);
    const [currentSlide, setCurrentSlide] = useState(slides[0] || null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [allowToChangeSlide, setAllow] = useState(true);

    const allowChange = () => setAllow(true);
    const prohibitChange = () => setAllow(false);

    const nextSlide = () => {
        if (allowToChangeSlide) {
            setCurrentIndex((prev) => {
                return prev >= slidesLength - 1 ? 0 : prev + 1;
            });
        }
    };

    const prevSlide = () => {
        if (allowToChangeSlide) {
            setCurrentIndex((prev) => {
                return prev <= 0 ? slidesLength - 1 : prev - 1;
            });
        }
    };

    useEffect(() => {
        setCurrentSlide(slidesArray[currentIndex]);
    }, [slidesArray, currentIndex]);

    return (
        <sliderContext.Provider
            value={{
                slides: slidesArray,
                length: slidesLength,
                currentSlide,
                currentIndex,
                allowedToChangeSlide: allowToChangeSlide,
                allowChange,
                prohibitChange,
                nextSlide,
                prevSlide,
            }}
        >
            {children}
        </sliderContext.Provider>
    );
};

export default SliderProvider;
