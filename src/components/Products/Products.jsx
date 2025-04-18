import { React, useEffect, useState, useRef } from 'react';
import { Link, Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';

import arrow from "../../styles/images/keyboard-arrow-right.svg";
import { products } from "../../data/products";

import PopularProducts from './PopularProducts';

import cart from "../../styles/images/cart-large-2-svgrepo-com.svg";

import { useSelector } from 'react-redux';

const Products = () => {
    const [isList, setIsList] = useState(false);


    const cartItems = useSelector((state) => state.cart.items);

    const openList = () => {
        setIsList(!isList);
    };

    const categoryTitles = {
        Akusüsteem: "Akusüsteemid",
        Lisaseadmed: "Lisaseadmeid",
        Hübriidinverter: "Hübriidinverterid",
        Akuinverter: "Akuinverterid",
    };

    const grouped = products.reduce((acc, product) => {
        if (!acc[product.type]) acc[product.type] = [];
        acc[product.type].push(product);
        return acc;
    }, {});

    const categories = Object.entries(grouped).map(([type, items]) => ({
        name: `products-${type.toLowerCase()}-section`,
        title: categoryTitles[type] || type,
        products: items,
    }));



    return (
        <main className='main'>
            <div className="products-main">
                <div data-aos="fade-down" className="products-main__container __container">
                    <div className="products-main-title-block">
                        <h1 className="products-main-title">Kaasaegsed tooted teie energiasüsteemidele</h1>
                    </div>
                    <div className="products-main-products-list-block">
                        <div className="products-main-products-list__container">
                            <div className="products-main-products-list-open-btn" onClick={openList}>
                                Kategooriad →
                            </div>

                            <ul className={`products-main-products-list ${isList ? "active" : ""}`}>
                                {categories.map((category, index) => (
                                    <li key={index} className="products-main-products-list-item">
                                        <ScrollLink
                                            to={category.name}
                                            offset={-60}
                                            duration={500}
                                            className='products-main-products-list-item-link'
                                        >
                                            {category.title.replace("Poopularsed ", "")}
                                        </ScrollLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="products-pop-products-cont products-main__container __container">
                <PopularProducts products={products} Link={Link} arrow={arrow} />
                {categories.map((category, index) => (
                    <Element name={category.name} key={index} className={`products-section ${category.name}`}>
                        <header data-aos="fade-up" className="products-popular-products-section-header">
                            <div className="products-popular-products-section-header-title-block">
                                <div className="home-main-section1-content-line"></div>
                                <h1 className="products-popular-products-section-header-title">{category.title}</h1>
                            </div>
                            <div className="products-popular-products-section-header-btn-block">
                                <RouterLink to='all-products' className="products-popular-products-section-header-btn">
                                    Vaata kõik tooteid <img className="arrow" src={arrow} alt="arrow" />
                                </RouterLink>
                            </div>
                        </header>
                        <h5 data-aos="fade-up" className="scroll-text">
                            Keri, et näha tooted <img className="arrow" src={arrow} alt="arrow" />
                        </h5>
                        <main data-aos="fade-up" className="products-popular-products-section-main">
                            <div className="products-popular-products-section-main__container">
                                <div className="products-popular-products-carusel products-carusel">
                                    {category.products.map((product) => (
                                        <div key={product.id} className="popular-products-section-product-card products-product-card">
                                            <div className="product-card-img-block">
                                                <img className="product-card-img" src={product.img} alt="foto" />
                                            </div>
                                            <div className="product-card-text-block">
                                                <RouterLink to={`/products/${product.id}`} className="product-card-title">
                                                    {product.name}
                                                </RouterLink>
                                                <h2 className="product-card-price">
                                                    {product.price}€
                                                </h2>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </main>
                    </Element>
                ))}
            </div>

            <div className="victrone-block__container __container">
                <header data-aos="fade-up" className="products-popular-products-section-header">
                    <div className="products-popular-products-section-header-title-block">
                        <div className="home-main-section1-content-line"></div>
                        <h1 className="products-popular-products-section-header-title">
                            Victron Energy
                        </h1>
                    </div>
                    <div className="products-popular-products-section-header-btn-block">
                        <RouterLink className="products-popular-products-section-header-btn">
                            Küsi pakkumist <img className="arrow" src={arrow} alt="arrow" />
                        </RouterLink>
                    </div>
                </header>
            </div>

            <div className="products-cart-btn">
                <Link to="/cart" className="products-cart-btn-link">
                    <img className="products-cart-btn-link-ico" src={cart} alt="cart" />
                    <span className="lenth">{cartItems.length}</span>
                    <span className="span">Sinu ostukorv</span>
                </Link>
            </div>
        </main>
    );
};

export default Products;
