const getStoredCart = () => {
    const storedItems = localStorage.getItem('cart');
    if(storedItems){
        return JSON.parse(storedItems)
    }
    return []
}

const saveToCart = cart =>{
    const JSONCart = JSON.stringify(cart);
    localStorage.setItem('cart', JSONCart)
}

const addToCart = id => {
    const cartItems = getStoredCart();
    cartItems.push(id)
    saveToCart(cartItems)
}

const RemoveItemFromLS = id => {
    const items = getStoredCart();
    const remaining = items.filter(item => item !== id);
    saveToCart(remaining);
}

export {addToCart, getStoredCart, RemoveItemFromLS}