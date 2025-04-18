import React from 'react';
import logo from "../../styles/images/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div data-aos="fade-up" className="footer__container __container">
                <div className="footer-content-1 footer-content">
                    <div className="footer-logo">
                        <Link><img src={logo} alt="Voltamp Logo" /></Link>
                    </div>

                    <h3 className="footer-title">
                        Energia, mida võid usaldada
                    </h3>

                    <p className='footer-rights footer-p'>
                        © Voltamp 2025
                    </p>
                </div>
                <div className="footer-content-2 footer-content">

                </div>
                <div className="footer-content-3 footer-content">
                    <div className="footer-telefon">
                        <h3 className="footer-telefon-title">
                            Telefon
                        </h3>
                        <p className="footer-p">
                            +372 555 343 14
                        </p>
                    </div>
                    <div className="footer-questions">
                        <h3 className="footer-questions-title">
                            Kas jäi küsimusi?
                        </h3>
                        <Link className='footer-form-link'>Jäta taotlus</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer