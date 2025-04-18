import React from 'react';

const PopularProducts = ({ products, Link, arrow }) => {
    return (
        <div data-aos="fade-up" className="products-popular-products-section products-section">
            <header className="products-popular-products-section-header">
                <div className="products-popular-products-section-header-title-block">
                    <div className="home-main-section1-content-line"></div>
                    <h1 className="products-popular-products-section-header-title">Poopularsed tooted</h1>
                </div>
                <div className="products-popular-products-section-header-btn-block">
                    <Link to='/all-products' className="products-popular-products-section-header-btn">
                        Vaata kõik tooteid <img className="arrow" src={arrow} alt="arrow" />
                    </Link>
                </div>
            </header>
            <h5 data-aos="fade-up" className="scroll-text">
                Keri, et näha tooted <img className="arrow" src={arrow} alt="arrow" />
            </h5>
            <main className="products-popular-products-section-main">
                <div className="products-popular-products-section-main__container">
                    <div className="products-popular-products-carusel products-carusel">
                        {products.slice(0, 8).map((product) => (
                            <div key={product.id} className="popular-products-section-product-card products-product-card">

                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PopularProducts;