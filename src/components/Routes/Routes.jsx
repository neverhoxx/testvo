import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Products from '../Products/Products';
import AllProducts from '../Products/allProducts';

import ProductsDetails from '../Products/ProductsDetails';
import Cart from '../Cart';
import Kasulikku from '../Kasulikku/Kasulikku';

import Faq from '../Kasulikku/Faq/Faq';

const AppRoutes = () => {

    //  />
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductsDetails />} />
            <Route path="all-products" element={<AllProducts />} />
            <Route path="cart" element={<Cart />} />
            <Route path="kasulikku" element={<Kasulikku />} />
            <Route path="faq" element={<Faq />} />

        </Routes>


    )
}

export default AppRoutes;