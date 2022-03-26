import React from 'react';
import './cart.css'

const Cart = ({cart}) => {
    const {name, image} = cart;
    return (
        <div className='cart-info'>
            <img src={image} alt=""></img>
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;