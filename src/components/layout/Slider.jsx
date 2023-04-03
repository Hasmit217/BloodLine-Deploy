import { useState } from 'react';
import sliderItems from "../bloodCamp/option";

const Slider = ({ slides }) => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveSlideIndex(activeSlideIndex === 0 ? sliderItems.length - 1 : activeSlideIndex - 1);
    };

    const handleNextClick = () => {
        setActiveSlideIndex(activeSlideIndex === sliderItems.length - 1 ? 0 : activeSlideIndex + 1);
    };

    return (
        <div className="slider">
            <button className="prev" onClick={handlePrevClick}>
                &gt;
            </button>
            <div className="slides">
                {sliderItems.map((slide, index) => (
                    <div key={slide.id} className={`slide ${index === activeSlideIndex ? 'active' : ''}`} >
                        <img src={slide.img} />
                    </div>
                ))}
            </div>
            <button className="next" onClick={handleNextClick}>
                &gt;
            </button>
        </div>
    );
};

export default Slider;
