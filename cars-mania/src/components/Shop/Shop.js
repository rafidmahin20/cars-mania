import React, { useEffect, useState } from 'react';
import Cars from '../Cars/cars';
import './shop.css';
const Shop = () => {
    const [data, setData] = useState([]);

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
                    >
                    </Cars>)
               }
           </div>
           <div className='cart-container'>
               Your Cars
           </div>
        </div>
    );
};

export default Shop;