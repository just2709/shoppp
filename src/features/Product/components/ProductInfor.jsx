import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

ProductInfor.propTypes = {};

function ProductInfor({ product }) {
  return (
    <Box>
      <h1 className='first-letter:uppercase font-bold text-3xl'>
        {product.name}
      </h1>
      <h2 className='flex text-bold text-3xl text-red-600 items-end bg-[#FAFAFA] p-5 rounded-lg w-full my-5'>
        {Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.salePrice)}
        {product.isPromotion ? (
          <h3 className='text-xl ml-5 text-[#808089]'>
            <span className='line-through'>
              {Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.originalPrice)}
            </span>
            <span className='text-red-600 border border-red-400 rounded ml-4 px-1'>
              -{product.promotionPercent}%
            </span>
          </h3>
        ) : (
          ""
        )}
      </h2>
      <h3 className='first-letter:uppercase'>{product.shortDescription}</h3>
    </Box>
  );
}

export default ProductInfor;
