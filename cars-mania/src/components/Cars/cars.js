import React from 'react';
import './cars.css';
import {BsFillCartFill} from 'react-icons/bs'

const cars = (props) => {
    const {name, image, price, _id} = props.data;
    const handleAddToCart = (_id) => {
        console.log(_id);
    }
    return (
        <div className='cars'>
            <img src={image} alt=""></img>
            <div className='cars-info'>
            <p className='cars-name'>{name}</p>
            <p>price: $</p>
            </div>
            <button onClick={() => handleAddToCart(_id)} className='btn-car'>
                <p>Add To Cart <BsFillCartFill/></p>
            </button>
        </div>
    );
};

export default cars;