import React from "react";
import i from './intro.module.css';

const Intro = () => {
    return (
        <div className={i.intro}>
            <div className={i.container}>
                <div className={i.wrapper}>
                    <div className={i.block}>
                        <h1 className={i.title}>Wines</h1>
                        <h2>Online store</h2>
                        <p className={i.text}>The best wines with long
                        standing endurance</p>
                        <div className={i.action}>
                            <a className={`${i.btn} ${i.main}`} href="#">Купить</a>
                            <a className={`${i.btn} ${i.secondary}`} href="#">Каталог</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;