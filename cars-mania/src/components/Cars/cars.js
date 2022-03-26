import React from 'react';

const cars = (props) => {
    const {name, image, price} = props.data;
    return (
        <div>
            <img src={image} alt=""></img>
        </div>
    );
};

export default cars;