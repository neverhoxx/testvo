import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import cart from "../../styles/images/cart-large-2-svgrepo-com.svg";

export function ProductDetails() {
    const { id } = useParams();
    const productId = parseInt(id);
    const cartItems = useSelector((state) => state.cart.items);

    const product = products.find(product => product.id === productId);

    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const itemExists = items.some((item) => item.id === product.id);

        if (itemExists) {
            console.log('Товар уже добавлен в корзину');
        } else {
            dispatch(addToCart(product));
        }
    };

    return (
        <main className="main products-det-main">
            <div className="__container products-det-main__container">

                <div className="products-det-main-title-section">
                    <div className="products-det-main-img-block">
                        <img className='products-det-main-img' src={product.img} alt="Pilt" />
                    </div>
                    <div className="products-det-main-name-block">
                        <header className="products-det-main-name-block-header">
                            <div className="products-det-main-name-block-header-logo">
                                <img className="products-det-main-name-block-header-logo-pic" src={product.logo} alt="Logo" />
                            </div>
                            <div className="products-det-main-name-block-header-link-block">
                                <Link className="products-det-main-name-block-header-link">
                                    Näita kõiki kaubamärgi tooteid
                                </Link>
                            </div>


                        </header>

                        <main className="products-det-main-name-block-main">
                            <div className="products-det-main-name-block-main-name">
                                <h2 className="products-det-main-name-block-main-name-title">
                                    {product.name}
                                </h2>
                            </div>
                            <div className="products-det-main-name-block-main-price">
                                <h1>
                                    {product.price}€
                                </h1>

                            </div>

                            <div className="products-det-main-name-block-main-cart-btn-block">
                                <div className="products-det-main-name-block-main-cart-btn" onClick={handleAddToCart}>
                                    Lisa ostukorvi
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="products-det-main-charastics-section">
                    <header className="products-det-main-charastics-section-header">
                        <div className="home-main-section1-content-line"></div>
                        <h1 className="cart-main-header-title">
                            Tehnilised andmed
                        </h1>
                    </header>
                    <main className='products-det-main-charastics-section-content'>
                        <table className="char-table">
                            <tbody>
                                {product.characteristics && typeof product.characteristics === 'object' ? (
                                    Object.entries(product.characteristics).map(([key, value]) => (
                                        <tr className='char-table-tr' key={key}>
                                            <td className="char-name">{key}</td>
                                            <td className="char-value">{value}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2" style={{ textAlign: 'center', padding: '1rem' }}>
                                            Pole andmeid
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
            <div className="products-cart-btn">
                <Link to="/cart" className="products-cart-btn-link">
                    <img className="products-cart-btn-link-ico" src={cart} alt="cart" />
                    <span className="lenth">{cartItems.length}</span>
                    <span className="span">Sinu ostukorv</span>
                </Link>
            </div>
        </main>
    )
}

export default ProductDetails;