import React, { useEffect, useState } from 'react';
import Cars from '../Cars/cars';
import Cart from '../Cart/Cart';
import './shop.css';

const Shop = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (_id) => {
        const newArray = [...cart, _id];
        setCart(newArray);
    }

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);
    return ( 
        <div className='shop-container'>
           <div className='cars-container'>
               {
                  data.map(data => <Cars 
                    key={data._id}
                    data = {data}
                    handleAddToCart = {handleAddToCart}
                    >
                    </Cars>)
               }
           </div>
           <div className='cart-container'>
               {
                   cart.map(cart => <Cart
                    key = {cart._id}
                    cart = {cart}
                    ></Cart>)
               }
           </div>
        </div>
    );
};

export default Shop;