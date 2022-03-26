import React from 'react';
import './cars.css';
import {BsFillCartFill} from 'react-icons/bs'

const cars = ({data, handleAddToCart}) => {
    const {name, image, price, _id} = data;
    
    return (
        <div className='cars'>
            <img src={image} alt=""></img>
            <div className='cars-info'>
            <p className='cars-name'>{name}</p>
            <p>price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(data)} className='btn-car'>
                <p>Add To Cart <BsFillCartFill/></p>
            </button>
        </div>
    );
};

export default cars;