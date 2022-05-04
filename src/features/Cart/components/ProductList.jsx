import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import { useSelector } from "react-redux";

ProductList.propTypes = {};

function ProductList(props) {
  const productList = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      Danh sách sản phẩm
      {productList.map((product) => (
        <Product
          key={product.id}
          product={product.product}
          quantity={product.quantity}
        />
      ))}
    </div>
  );
}

export default ProductList;
