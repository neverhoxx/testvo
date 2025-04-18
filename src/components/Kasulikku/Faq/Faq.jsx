import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import ico from "../../../styles/images/akar-icons_chevron-right.svg";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleModal = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Mis on Payment Gateway?",
            answer: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players///Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce."
        },
        {
            question: "Kas ma pean Instapayle maksma isegi siis, kui minu ettevõttes ei toimu ühtegi tehingut?",
            answer: "Ei, Instapay ei nõua kuutasu, kui sinu ettevõttes ei toimu ühtegi tehingut – maksad ainult kasutuse eest."
        },
        {
            question: "Milliseid platvorme Instapay Payment Gateway toetab?",
            answer: "Instapay toetab populaarseid platvorme nagu WooCommerce, Shopify, Magento ja teisi."
        },
        {
            question: "Kas Instapay pakub rahvusvaheliste maksete tuge?",
            answer: "Jah, Instapay toetab mitmeid valuutasid ja rahvusvahelisi makseid, võimaldades sul müüa üle kogu maailma."
        },
        {
            question: "Kas ma pean regulaarselt maksma seadistustasu või iga-aastast hooldustasu?",
            answer: "Ei, seadistustasu on ühekordne ja hooldustasu ei rakendu – maksad ainult tehingute pealt."
        },
    ];

    return (
        <div className="faq-section">
            <div className="faq-section__container __container">
                <header className="faq-section-header">
                    <h1 className="faq-section-header-title">
                        Korduma kippuvad küsimused
                    </h1>
                </header>
                <main className="faq-section-main">
                    <div className="faq-section-main-questions">
                        {faqData.map((item, index) => (
                            <div key={index}>
                                <div
                                    onClick={() => toggleModal(index)}
                                    className={`faq-section-main-questions-block ${activeIndex === index ? "active" : ""}`}
                                >
                                    <div className={`faq-section-main-questions-block-circle ${activeIndex === index ? "active" : ""}`}></div>
                                    <h3 className="faq-section-main-questions-block-text">
                                        {item.question}
                                    </h3>
                                    <img src={ico} alt="ico" className={`faq-section-main-questions-block-img ${activeIndex === index ? "active" : ""}`} />
                                </div>

                                <div className={`faq-section-mobile-answer ${activeIndex === index ? "active" : ""}`}>
                                    {activeIndex === index &&
                                        <div className="faq-section-modal-content">
                                            <h2 className='faq-section-modal-content-title'>{item.question}</h2>
                                            <div className="home-main-section1-content-line"></div>
                                            {item.answer.split("///").map((paragraph, i) => (
                                                <p className='faq-section-modal-content-text' key={i}>{paragraph}</p>
                                            ))}
                                        </div>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`faq-section-modal ${activeIndex !== null ? "active" : ""}`}>
                        {activeIndex !== null && (
                            <div className="faq-section-modal-content">
                                <h2 className='faq-section-modal-content-title'>{faqData[activeIndex].question}</h2>
                                <div className="home-main-section1-content-line"></div>

                                {faqData[activeIndex].answer.split("///").map((paragraph, i) => (
                                    <p className='faq-section-modal-content-text' key={i}>{paragraph}</p>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Faq;
