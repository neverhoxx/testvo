import React from 'react';

const AllProducts = () => {
    return (
        <main className='main'>
            <div className="all-products-main">

                <div className="__container all-products__container">
                    <nav className="all-products-categories">
                        <h2 className='all-products-categories-title'>Kategooriad</h2>
                    </nav>
                    <div className="all-products-block">
                        Products
                    </div>
                </div>

            </div>
        </main>
    )
}

export default AllProducts;


{/*<div className="cart-products-section">
                            {items.length === 0 ? (
                                <h1 className='tuhi'>Ostukorv on tühi</h1>
                            ) : (
                                items.map((item) => (
                                    <div key={item.id} className="cart-item-card">
                                        <img className='cart-item-card-img' src={item.img} alt={item.name} />
                                        <div className='cart-item-card-text-block'>
                                            <h3 className='cart-item-card-text-block-name'>{item.name}</h3>
                                            <p className='cart-item-card-text-block-price'>{item.price}€</p>
                                            <div className="cart-amount">
                                                <div className='minus kvadrat' onClick={() => handleDecrement(item.id, item.quantity)}>-</div>
                                                <p className='amount kvadrat'>{item.quantity}</p>
                                                <div className='plus kvadrat' onClick={() => handleIncrement(item.id)}>+</div>
                                            </div>
                                            <div onClick={() => handleRemoveFromCart(item.id)}>Kustuta</div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="cart-checkout-section">
                            <div className="kogusumma">
                                <h2>Kogusumma: {items.reduce((total, item) => total + item.price * item.quantity, 0)}€</h2>
                            </div>
                            <div className="delete cart-checkout-section-btn">
                                Tühjenda ostukorvi
                            </div>
                            <div className="order cart-checkout-section-btn">
                                Tellida
                            </div>
                        </div>*/}