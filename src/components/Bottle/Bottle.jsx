import './Bottle.css'
const Bottle = ({bottle, handlePurchase}) => {
    const {img, name, price} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => handlePurchase(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;