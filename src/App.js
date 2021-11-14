import React, { useState} from "react";
// import axios from "axios";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router";
import Cart from "./Components/Cart";

const url = "https://guvi-hackathon2-yogesh.herokuapp.com";
export const productContext = React.createContext();
function App() {
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(cart.length);
  

  return (
    <BrowserRouter>
      <productContext.Provider
        value={{
          cart,
          setCart,
          cartValue,
          setCartValue,
          url,
        }}
      >
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </productContext.Provider>
    </BrowserRouter>
  );
}

export default App;
