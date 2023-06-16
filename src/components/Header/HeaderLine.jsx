import React from "react";
import hl from './hl.module.css';

const HeaderLine = () => {
    return (
        <div className={hl.container}>
            <div className={hl.line__wrapper}>
                <div className={hl.line__lng}>
                    <a className={hl.active} href="#">En</a>
                    <a href="#">Ru</a>
                </div>
                <a className={hl.phone} href="#">+373(775)02914</a>
            </div>
        </div>
    )
}

export default HeaderLine;