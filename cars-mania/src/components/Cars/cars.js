import React from 'react';
import './cars.css';

const cars = (props) => {
    const {name, image, price} = props.data;
    return (
        <div className='cars'>
            <img src={image} alt=""></img>
        </div>
    );
};

export default cars;