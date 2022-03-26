import React, { useEffect, useState } from 'react';
import cars from '../Cars/cars';
import Cars from '../Cars/cars';
import Cart from '../Cart/Cart';
import './shop.css';

const Shop = () => {
    const [data, setData] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (_id) => {
        let newArray;
        const existingCart = cart.find(item => item._id === cars._id);
        if(!existingCart && cart.length < 4) {
            newArray = [...cart, _id];
            setCart(newArray);
        }
        else if(cart.length >=4) {
            alert('cannot add items');
        }
        else{
            newArray = [...cart];
            alert('added');
            setCart(newArray);
        }
        // const newArray = [...cart, _id];
        // setCart(newArray);
    }

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);

    const chooseOneButton = () => {
        let newItem;
        const randomItem = Math.round(Math.random() * cart.length);
        {
            const randomCar = cart[randomItem];
            if(randomCar){
                newItem = [randomCar];
                setCart(newItem);
            }
        }
        console.log(randomItem);
    }
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
               <button onClick={chooseOneButton} className='btn-choose'>
                   <p>choose one</p>
               </button>
               <br></br>
               <button onClick={() => {
                   setCart([]);
               }}
                className='choose-again'>
                   <p>choose again</p>
               </button>
           </div>
           <div>
               <h2>How React works?</h2>
               <p>react is js library but not a mvc framework. React basically maintain the tree for you. This tree does efficient diff computations on the nodes. It react allows you to re-construct your dom with changes to the dom. which have actually occured with the help of virtual dom.</p>
               <h2>Difference between props vs state?</h2>
               <p>states are mutable, props are immutable. You can define state in the component itself. In props You can pass properties from parent components. The state is set and uploaded by the object. In props, determine the view upon creation and then they remain static. Both are accessible as attributes of the component class and compose components with a different representation view.</p>
           </div>
        </div>
    );
};

export default Shop;