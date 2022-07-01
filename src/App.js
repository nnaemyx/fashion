import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About"
import Contact from "./routes/Contact"
import Allproducts from "./routes/Allproducts"
import Cart from "./routes/Cart"
import Signup from "./routes/Signup"
import Login from "./routes/Login"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/allproducts" element={<Allproducts/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
