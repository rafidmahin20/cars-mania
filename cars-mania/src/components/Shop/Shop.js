import React, { useEffect, useState } from 'react';
import './shop.css';
const Shop = () => {
    const [data, setData] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return ( 
        <div className='shop-container'>
           <div className='cars-container'>
               this is cars: {data.length}
           </div>
           <div className='cart-container'>
               Your Cars
           </div>
        </div>
    );
};

export default Shop;