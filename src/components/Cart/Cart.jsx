import PropTypes from 'prop-types';
import './Cart.css'
const Cart = ({cart, RemoveItem}) => {
    return (
        <div>
            <h3>Total Cart Items: {cart.length}</h3>
            <div className="cart">
            {
                cart.map(item=> <div key={item.id}>
                    <div>
                        <img  src={item.img}></img>
                    </div>
                    <button onClick={()=> RemoveItem(item.id)} style={{ marginBottom: '20px' }}>Remove Item</button>
                    </div>)
            }
        </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    RemoveItem: PropTypes.func
}

export default Cart;