import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const Kasulikku = () => {
    const [isList, setIsList] = useState(false);

    const openList = () => {
        setIsList(!isList);
    };

    return (
        <main className='main'>
            <div className="kasulikku-main">
                <div data-aos="fade-down" className="kasulikku-main__container __container">
                    <div className="kasulikku-main-text-block">
                        <h1 className="kasulikku-main-text">
                            Uuenduslikud lahendused teie mugavuse tagamiseks
                        </h1>
                    </div>
                    <div className="kasulikku-main-products-list-block">
                        <div className="kasulikku-main-products-list__container">
                            <div className="kasulikku-main-products-list-open-btn" onClick={openList}>
                                Navigeerimine →
                            </div>

                            <ul className={`kasulikku-main-products-list ${isList ? "active" : ""}`}>
                                <li className="kasulikku-main-products-list-item">
                                    <Link className='kasulikku-main-products-list-item-link'>KKK</Link>
                                </li>
                                <li className="kasulikku-main-products-list-item">
                                    <Link className='kasulikku-main-products-list-item-link'>Akusüsteem eelised</Link>
                                </li>
                                <li className="kasulikku-main-products-list-item">
                                    <Link className='kasulikku-main-products-list-item-link'>Artiklid</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Kasulikku