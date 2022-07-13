import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

ProductList.propTypes = {};

function ProductList(props) {
  const productList = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      Danh sách sản phẩm
      {productList.map((product) => (
        <Product key={product.id} product={product.product} quantity={product.quantity} />
      ))}
    </div>
  );
}

export default ProductList;
