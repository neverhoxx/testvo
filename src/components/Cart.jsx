import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, incrementQuantity, decrementQuantity, setQuantity } from './redux/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleIncrement = (id) => {
        dispatch(incrementQuantity(id));
    };

    const handleDecrement = (id, quantity) => {
        if (quantity > 1) {
            dispatch(decrementQuantity(id));
        }
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };


    const handleQuantityChange = (id, newQuantity) => {
        const quantity = Math.max(1, Number(newQuantity));
        dispatch(setQuantity({ id, quantity }));
    };


    return (
        <main className="main">
            <div className="cart-main">
                <div className="cart-main__container __container">
                    <header data-aos="fade-up" className="cart-main-header">
                        <div className="cart-main-header-title-block">
                            <div className="home-main-section1-content-line"></div>
                            <h1 className="cart-main-header-title">
                                Sinu ostukorv
                            </h1>
                        </div>
                        <div className="cart-main-header-btn-block">
                            <Link to="/products" className="cart-main-header-btn">
                                Tagasi toodete juurde
                            </Link>
                        </div>
                    </header>

                    <main data-aos="fade-up" className="cart-main-content">
                        <table className='cart-table'>
                            <thead className='cart-table-header'>
                                <tr className='cart-table-header-tr'>
                                    <th className='table-delete-block'></th>
                                    <th className='table-img-block'></th>
                                    <th className='table-product-block'>Toode</th>
                                    <th className='table-price-block'>Hind</th>
                                    <th className='table-amount-block'>Kogus</th>
                                    <th className='table-sum-block'>Summa</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr className='cart-table-body-tr' key={item.id}>
                                        <td><button onClick={() => handleRemoveFromCart(item.id)}>Kustuta</button></td>
                                        <td><img className='cart-table-img' src={item.img} alt="pilt" /></td>
                                        <td><Link to={`/products/${item.id}`}>{item.name}</Link></td>
                                        <td>{item.price}€</td>
                                        <td>
                                            <input
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                            />
                                        </td>
                                        <td>{(item.price * item.quantity).toFixed(2)}€</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </main>
                </div>
            </div>
        </main>
    );
}

export default Cart;
