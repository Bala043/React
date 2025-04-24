import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, clearCart } from '../utils/cartSlice';
import { CDN_URL} from '../utils/constants';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart</h2>
      <button className="clear-cart-btn" onClick={handleClearCart}>
        Clear Cart
      </button>
      {cartItems.length === 0 ? (
        <p className="empty-message">🛒 Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-card">
              <div className="cart-details">
                <h3>{item.card.info.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ₹{item.card.info.defaultPrice || item.card.info.price}</p>
                <button data-testid="remove-btn"
                  className="clear-cart-btn"
                  onClick={() => handleRemove(item)}>
                  Remove
                </button>
              </div>
              <div className="cart-image">
                <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Cart;
