import React from "react";
import b from './body.module.css';

const Body = () => {
    return (
            <main className={b.main}>
                <section className={b.top}>
                    <div className={b.container}>
                        <h1 className={b.title}>Wines</h1>
                        <p className={b.subtitle}>Online Store</p>
                        <p className={b.topText}>The best wines with long
                            standing endurance</p>
                        <button className={b.btnBuy}>
                            <span className={b.btnTextBuy}>Купить</span>
                        </button>
                        <button className={b.btnCatalog}>
                            <span className={b.btnTextCatalog}>Каталог</span>
                        </button>
                    </div>
                </section>
                {/*<section className={body.features}>
                    <div className={body.container}>
                        <div className={body.featuresTitles}>
                            <h2 className={body.section}>Лучшие вина</h2>
                        </div>
                    </div>
                </section>*/}
            </main>
    )
}
export default Body;