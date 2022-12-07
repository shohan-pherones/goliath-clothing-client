import { useState } from "react";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "./Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar shadow">
      <div className="container mx-auto flex justify-between items-center gap-5 h-20">
        <div className="left flex gap-5">
          <div className="locale flex items-start">
            <span>EN</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="currency flex items-start">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="left-links flex gap-5">
            <Link to="/products/1">Men</Link>
            <Link to="/products/2">Women</Link>
            <Link to="/products/3">Kids</Link>
            <Link to="/products/4">Accessories</Link>
          </div>
        </div>
        <div className="mid">
          <Link
            to="/"
            className="logo uppercase text-2xl tracking-widest font-bold slide-headline"
          >
            Goliath.
          </Link>
        </div>
        <div className="right flex gap-5">
          <div className="right-links flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="icons flex gap-5">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div
              className="cart-icon relative cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <ShoppingCartOutlinedIcon />
              <span className="cart-count-ribbon absolute bg-teal-500 h-5 w-5 rounded-full flex items-center justify-center -top-2 -right-2 text-sm font-semibold text-white">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </nav>
  );
};

export default Navbar;
