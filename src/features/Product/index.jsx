import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useLocation();
  return (
    <div>
      <Routes>
        {/* <Route path='/myshop' element={<Navigate to='/' replace />} /> */}
        <Route path='/myshop/' element={<HomePage />}></Route>
        <Route path='products' element={<ListPage />}></Route>
        <Route path='products/:productId' element={<DetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default ProductFeature;
