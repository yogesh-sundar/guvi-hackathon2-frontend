import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../App";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Products() {
  const context = useContext(productContext);
  let [products, setProducts] = useState([]);
  let [response, setResponse] = useState("");
  let [productId, setProductId] = useState("");
  let [date, setDate] = useState("");
  let [startTime, setStartTIme] = useState("");
  let [endTime, setEndTIme] = useState("");
  let getProducts = async () => {
    await axios.get(`${context.url}/products`).then((response) => {
      setProducts(response.data.data);
    });
  };
  useEffect(() => {
    getProducts();
  }, [context]);

  const handleClick = async(e)=>{
    setResponse("");
    if (productId && date && startTime && endTime) {
      await axios
        .post("https://guvi-hackathon2-yogesh.herokuapp.com/booking", {
          productId: e.productId,
          date: e.date,
          startTime: e.startTime,
          endTime: e.endTime,
        })
        .then(async (res) => {
          setResponse(res.data.message);
          console.log(res);
          return toast(response, { type: "success" });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return toast("Fields cannot be empty", { type: "error" });
    }
}
  

  return (
    <div className="product-wrapper">
      <ToastContainer position="top-right" width="200px" />
      <h2>List of Products</h2>
      {products.map((e, i) => {
        return (
          <div className="product-item-wrapper" key={i}>
            <div className="product-details">
              <h4>Product Name: {e.productName}</h4>
              <div className="product-id">Product Id: {e.productId}</div>
              <div className="product-price">
                Product Price/Hour: &#x20B9; {e.price}
              </div>
              <div className="date">
                <label>Date: </label>
                <input
                  type="text"
                  placeholder="enter your hiring date"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="startTime">
                <label>Start Time: </label>
                <input
                  type="text"
                  placeholder="enter your starting time"
                  onChange={(e) => setStartTIme(e.target.value)}
                />
              </div>
              <div className="endTime">
                <label>End Time: </label>
                <input
                  type="text"
                  placeholder="enter your Ending time"
                  onChange={(e) => setEndTIme(e.target.value)}
                />
              </div>
              <button
                className="product-btn"
                onClick={() => {
                  context.cart.push(e);
                  context.setCartValue(context.cart.length);
                }}
              >
                Add to cart
              </button>
              <button className="product-btn" onClick={()=>{handleClick(e)}}>
                Hire Now
              </button>
            </div>
            <div className="product-image">
              <img src={e.image} alt={e.productName}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
