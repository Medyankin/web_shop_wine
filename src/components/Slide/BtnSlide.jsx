import React from "react";
import b from './btn.module.css';
import leftArrow from '../../assets/icons/arrowL.png';
import rightArrow from '../../assets/icons/arrowR.png';

const BtnSlide = ({moveSlide, direction}) => {
    return(
        <button className={`${direction} === 'next' ? ${b.slide} 'next' : ${b.slide} 'prev'`} onClick={moveSlide}>
            <img src={direction === 'next' ? leftArrow : rightArrow} alt="" />
        </button>
    )
}

export default BtnSlide;