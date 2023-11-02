import React, { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./Carousel.scss"

function Carousel2({ data }) {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    return (
        <div className='carousel'>
            <BsArrowLeftCircleFill className='arrow arrowLeft' onClick={prevSlide} />
            {data.map((item, idx) => {
                return <img src={item.src} alt={item.alt} key={idx} className={slide === idx ? "slide" : "slideHidden"} />
            })}
            <BsArrowRightCircleFill className='arrow arrowRight' onClick={nextSlide} />
            <span className='indicators'>
                {data.map((_, idx) => {
                    return <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicatorInactive"}></button>
                })}
            </span>
        </div>
    )
}

export default Carousel2