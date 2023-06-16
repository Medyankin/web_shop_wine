import React from "react";
import s from './slide.module.css';
import wineBase from '../../shared/slideDataBase';
import BtnSlide from "./BtnSlide";
import { useState } from 'react';

const Slide = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if (slideIndex !== wineBase.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === wineBase.length) {
            setSlideIndex(1)
        }
    }
    const prevSlide = () => {
        if (slideIndex !==1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(wineBase.length)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className={s.container}>
                <div className={s.card}>
                    {wineBase.map((obj, index) => {
                        return (
                            <>
                                <div key={obj.id} className={slideIndex === index + 1 ? s.slideActive : s.slide}>
                                    <div>
                                        <img className={s.img} src={process.env.PUBLIC_URL + `/img/img${index+1}.jpg`} alt=""/>
                                    </div>
                                    <div className={s.blocText}>
                                        <h1 className={s.t}>{obj.titile}</h1>
                                        <p className={s.d}>{obj.description}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    <div className={s.btn}>
                        <BtnSlide moveSlide={nextSlide} direction={'next'} />
                        <BtnSlide moveSlide={prevSlide} direction={'prev'} />
                    </div>
                </div>
                <div className={s.containerDot}>
                    {Array.from({length: 5}).map((item, index) => (
                        <div
                            className={`${slideIndex} === ${index} + 1 ? ${s.dotActive} : ${s.dot}`}
                            onClick={() => moveDot(index + 1)}>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Slide;

/*
<div className={s.containerDot}>
    {Array.from({length: 5}).map((item, index) => (
        <div 
            onClick={() => moveDot(index + 1)}
            className={`${slideIndex} === ${index} + 1 ? ${s.dotActive} : ${s.dot}`}>
        </div>
    ))}
</div>
*/