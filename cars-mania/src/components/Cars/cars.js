import React from 'react';
import './cars.css';

const cars = (props) => {
    const {name, image, price} = props.data;
    return (
        <div className='cars'>
            <img src={image} alt=""></img>
            <div className='cars-info'>
            <p className='cars-name'>{name}</p>
            <p>price: $</p>
            </div>
            <button className='btn-car'>
                <p>Add To Cart</p>
            </button>
        </div>
    );
};

export default cars;