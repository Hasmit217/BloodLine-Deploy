import { useState } from 'react';
import sliderItems from "../bloodCamp/option";

const Slider = () => {
    // const sliderItems = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/12227661/pexels-photo-12227661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     },
    //     {
    //         id: 2,
    //         img: "https://images.pexels.com/photos/12820060/pexels-photo-12820060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     }
    // ]
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handlePrevClick = () => {
        setActiveSlideIndex(activeSlideIndex === 0 ? sliderItems.length - 1 : activeSlideIndex - 1);
    };

    const handleNextClick = () => {
        setActiveSlideIndex(activeSlideIndex === sliderItems.length - 1 ? 0 : activeSlideIndex + 1);
    };

    return (
        <div className="slider">
            {/* <button className="prev" onClick={handlePrevClick}>
                &gt;
            </button> */}
            {/* <div class="slides">
                <img src="https://images.pexels.com/photos/12227661/pexels-photo-12227661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            </div> */}
            <a className="prev" onClick={handlePrevClick}>❮</a>
            <a className="next" onClick={handleNextClick}>❯</a>
            <div className="slides">
                {sliderItems.map((slide, index=0) => (
                    <div key={slide.id} className={`slides ${index === activeSlideIndex ? 'active' : ''}`}>
                        <img src={slide.img} alt={`Slide ${slide.id}`} />
                    </div>
                ))}
            </div>

            {/* <button className="next" onClick={handleNextClick}>
                &gt;
            </button> */}
        </div>
    );
};

export default Slider;
