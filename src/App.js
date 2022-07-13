import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductFeature from "./features/Product";
import ListPage from "./features/Product/pages/ListPage";
import CartFeature from "./features/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notfound from "./components/Notfound/index";
import { useDispatch } from "react-redux";
import { setCart } from "./features/Cart/cartSlice";
import { unwrapResult } from "@reduxjs/toolkit";

function App() {
  
  return (
    <div className='bg-[#efefef]'>
      <Router>
        <Header />

        <Routes>
          <Route path='/*' element={<ProductFeature />}></Route>
          <Route path='/cart' element={<CartFeature />}></Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
