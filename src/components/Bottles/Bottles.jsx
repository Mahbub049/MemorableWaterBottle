import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { RemoveItemFromLS, addToCart, getStoredCart } from "../../Utils/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('Bottles.json')
        .then(res=> res.json())
        .then(data=>setBottles(data))
    },[])

    useEffect(()=> {
        if(bottles.length){
            const storedCart = getStoredCart();
            const savedCart = [];
            storedCart.map(id=>{
                const bottle = bottles.find(bottle=> bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            })
            setCart(savedCart)
        }
    }, [bottles])

    const handlePurchase = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToCart(bottle.id)
    }

    const RemoveItem = id => {
        const remaining = cart.filter(item => item.id !== id);
        setCart(remaining)
        RemoveItemFromLS(id);
    }

    return (
        <div>
            <h3>Total Bottles: {bottles.length}</h3>
            <Cart cart={cart} RemoveItem={RemoveItem}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} handlePurchase={handlePurchase} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;