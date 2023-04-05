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
            <div class="slides">
                <div class="numbertext">1 / 3</div>
                <img src="https://images.pexels.com/photos/12227661/pexels-photo-12227661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <div class="text">Caption Text</div>
            </div>
            {/* <div className="slides">
                {sliderItems.map((slide, index) => (
                    <div key={slide.id} className={`slide ${index === activeSlideIndex ? 'active' : ''}`} >
                        <img src={slide.img} />
                    </div>
                ))}
            </div> */}
            <button className="next" onClick={handleNextClick}>
                &gt;
            </button>
        </div>
    );
};

export default Slider;
