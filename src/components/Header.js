import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FoodLogo from '../assets/img/logo.png';
import useOnline from '../utils/useOnline';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.totalItemsCount);

  return (
    <>
      <ul className="flex">
        <Link to="/">
          <li className="px-2 py-1 rounded-md hover:bg-[#8ebe43]">Home</li>
        </Link>
        <Link to="/about">
          <li className="px-2 py-1 rounded-md hover:bg-[#8ebe43]">About</li>
        </Link>
        <Link to="/contact">
          <li className="px-2 py-1 rounded-md hover:bg-[#8ebe43]">
            Contact Us
          </li>
        </Link>
        <Link to="/faq">
          <li className="px-2 py-1 rounded-md hover:bg-[#8ebe43]">Faq's</li>
        </Link>
        <Link to="/cart" className="link">
          <li className="px-2 py-1 rounded-md hover:bg-[#8ebe43]">
            Cart{' '}
            <span className="text-[#fa4242]">{cartItems ? cartItems : 0}</span>
          </li>
        </Link>
      </ul>
      <div className="basis-24">
        {isLoggedIn ? (
          <button
            className="px-2 rounded-md bg-[#fa4242]"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="px-2 rounded-md bg-[#8ebe43]"
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            Login
          </button>
        )}
        {isOnline ? <span>🟢</span> : <span>🔴</span>}
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-2 mb-12 shadow-md">
      <Link to="/">
        <img src={FoodLogo} alt="Logo" className="w-12" />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
