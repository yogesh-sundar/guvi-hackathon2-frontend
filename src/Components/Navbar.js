import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Contactus from "./ContactUs";
import { productContext } from "../App";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  let context = useContext(productContext);
  let [products, setProducts] = useState([]);
  let [search, setSearch] = useState("");

  let getProducts = async () => {
    await axios.get(`${context.url}/products`).then((response) => {
      setProducts(response.data.data);
    });
  };
  useEffect(() => {
    getProducts();
  }, [context]);

  const handleClick = async () => {
    await axios.get(`${context.url}/products`).then((response) => {
      if (search === response.data.data.productName) {
        setProducts(response.data.data);
      } else {
        return toast("No products available", { type: "error" });
      }
    });
  };

  return (
    <div className="wrapper">
      <ToastContainer position="top-right" width="200px" />
      <div className="nav-wrapper">
        <div className="logo">EquipmentsHiring</div>
        <div className="search">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <IoSearchOutline className="icon" onClick={handleClick} />
        </div>
        <div className="nav">
          <Link to="" className="links" id="active">
            Home
          </Link>
          <Link to="" className="links">
            About Us
          </Link>
          <Link to="" className="links">
            Products
          </Link>
          <Link to="" className="links">
            Contact Us
          </Link>
        </div>
        <div className="cart">
          <Link to="/cart" className="cart-link">
            <IoMdCart className="cart-icon" />
          </Link>
          <span className="count">{context.cartValue}</span>
        </div>
      </div>
      <AboutUs />

      <Products />

      <Contactus />
    </div>
  );
}

export default Navbar;
