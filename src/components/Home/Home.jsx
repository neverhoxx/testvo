import { React, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import sec1 from "../../styles/images/sec1.jpg";
import arrow from "../../styles/images/keyboard-arrow-right.svg";

import { products } from '../../data/products';

import PopularProducts from '../Products/PopularProducts';
import Faq from '../Kasulikku/Faq/Faq';

const Home = () => {
    const [isList, setIsList] = useState(false);

    const openList = () => {
        setIsList(!isList);
    };

    return (
        <main className="main">
            <div className="home-main">
                <div data-aos="fade-down" className="home-main__container __container">
                    <div className="home-main-text-block">
                        <h1 className="home-main-text">
                            Usaldusväärne energia neile, kes valivad stabiilsuse, võimsuse ja juhitavuse – mis tahes tingimustes.
                        </h1>
                    </div>
                    <div className="home-main-products-list-block">
                        <div className="home-main-products-list__container">
                            <div className="home-main-products-list-open-btn" onClick={openList}>
                                Vaata tooteid →
                            </div>

                            <ul className={`home-main-products-list ${isList ? "active" : ""}`}>
                                <li className="home-main-products-list-item">
                                    <Link className='home-main-products-list-item-link'>Akusüsteemid</Link>
                                </li>
                                <li className="home-main-products-list-item">
                                    <Link className='home-main-products-list-item-link'>Lisaseadmeid</Link>
                                </li>
                                <li className="home-main-products-list-item">
                                    <Link className='home-main-products-list-item-link'>Hübriidinverterid</Link>
                                </li>
                                <li className="home-main-products-list-item">
                                    <Link className='home-main-products-list-item-link'>Akuinverterid</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="home-main-section1">
                <div className="home-main-section1__container">
                    <div data-aos="fade-up" className="home-main-section1-img-container">
                        <img className="home-main-section1-pic" src={sec1} alt="Photo" />
                    </div>

                    <div className="home-main-section1-content">
                        <div className="home-main-section1-content-line"></div>
                        <h1 className="home-main-section1-content-title">
                            Usaldusväärsed energiasalvestussüsteemid iga töö jaoks
                        </h1>
                        <p className="home-main-section1-content-text">
                            Oleme spetsialiseerunud kõrgepingeakude ja akuhaldussüsteemide valdkonna tipptasemel lahenduste pakkumisele. Meie kataloog sisaldab ainult testitud ja sertifitseeritud seadmeid
                        </p>
                        <Link to='/products' className="home-main-section1-content-btn">
                            Tooted <img className="arrow" src={arrow} alt="arrow" />
                        </Link>
                    </div>
                </div>

            </div>

            <div className="home-main-section2">
                <div data-aos="fade-up" className="home-main-section2__container __container">
                    <div className="home-main-section2-sticky-block">
                        <div className="home-main-section2-sticky-text">
                            <h1 className="home-main-section2-sticky-text-title">
                                Mida saame teile pakkuda?
                            </h1>
                        </div>
                    </div>
                    <div className="home-main-section2-content-block">
                        <div className="home-main-section2-content-1 home-main-section2-content">
                            <div className="home-main-section2-content-num">
                                01
                            </div>
                            <div className="home-main-section2-content-text">
                                <h2 className="home-main-section2-content-title">
                                    Võtmed kätte lahendused
                                </h2>
                                <p className="home-main-section2-content-p">
                                    Täielik seadmete komplekt energiasalvestussüsteemide käivitamiseks: akud, BMS, ühendusmoodulid, inverterid ja juhtimistarkvara.
                                </p>
                            </div>
                        </div>
                        <div className="home-main-section2-content-2 home-main-section2-content">
                            <div className="home-main-section2-content-num">
                                02
                            </div>
                            <div className="home-main-section2-content-text">
                                <h2 className="home-main-section2-content-title">
                                    Individuaalne komponentide valik
                                </h2>
                                <p className="home-main-section2-content-p">
                                    Valime teie ülesande jaoks seadmed - suvemajast tööstusrajatiseni. Garanteerime ühilduvuse ja optimaalse konfiguratsiooni.
                                </p>
                            </div>
                        </div>
                        <div className="home-main-section2-content-3 home-main-section2-content">
                            <div className="home-main-section2-content-num">
                                03
                            </div>
                            <div className="home-main-section2-content-text">
                                <h2 className="home-main-section2-content-title">
                                    Kohaletoimetamine ja tugi
                                </h2>
                                <p className="home-main-section2-content-p">
                                    Kiire kohaletoimetamine üle riigi ja tehniline tugi kõigil etappidel: alates seadmete valikust kuni seadistamiseni.
                                </p>
                            </div>
                        </div>
                        <div className="home-main-section2-content-4 home-main-section2-content">
                            <div className="home-main-section2-content-num">
                                04
                            </div>
                            <div className="home-main-section2-content-text">
                                <h2 className="home-main-section2-content-title">
                                    Dokumentatsioon ja koolitus
                                </h2>
                                <p className="home-main-section2-content-p">
                                    Lisame iga seadme juurde juhiseid, ühendusskeeme ja videoülevaateid. Samuti saame läbi viia lühikese veebipõhise infotunni süsteemiga töötamise kohta.
                                </p>
                            </div>
                        </div>
                        <div className="home-main-section2-content-5 home-main-section2-content">
                            <div className="home-main-section2-content-num">
                                05
                            </div>
                            <div className="home-main-section2-content-text">
                                <h2 className="home-main-section2-content-title">
                                    Garantii ja teenindus
                                </h2>
                                <p className="home-main-section2-content-p">
                                    Kõik seadmed on sertifitseeritud ja ametliku garantiiga 12 kuud. Rikete korral - asendage või parandage esimesel võimalusel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className="home-main-section3">
                <div className="home-main-section3__container __container">
                    <PopularProducts products={products} Link={Link} arrow={arrow} />
                </div>
            </div>

            <Faq />

        </main>

    )
}

export default Home;