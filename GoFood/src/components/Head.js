import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import{useSelector} from "react-redux"
const Head = () => {
  const [btnName, setBtnName] = useState("Login");
  //Subscribing to the store using useSelector
  const cartItems =useSelector((store)=>store.cart.items)//store is the default //cartItems=["burger","pizza"]

  return (
    <div className="Header">
      <div className="Logo-Container">
        <Link to="/">
          <img className="Logo" src={LOGO_URL} alt="logo" />
        </Link>
        <h2 className="ShopName">
          <Link to="/">GoFood</Link>
        </h2>
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
         <Link to="/cart"> < li className="cart-icon-container" data-testid="cart-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="cart-icon">
              <path fill="#fff" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <span data-testid="cart-badge"className="cart-badge">{cartItems.length}</span>
          </li>
          </Link>

          <li>
            <button
              className="login-btn"
              onClick={() =>
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
