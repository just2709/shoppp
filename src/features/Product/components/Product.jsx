import React from "react";
import PropTypes from "prop-types";
import { Box, Skeleton, Typography } from "@mui/material";
import { STATIC_HOST, THUMBNAILPLACEHOLDER } from "../../../constants/common";
import { useNavigate, createSearchParams } from "react-router-dom";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const thumnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAILPLACEHOLDER;

  const navigate = useNavigate();
  const handleClick = () => {
    console.log(product.id);

    navigate({
      pathname: `/products/${product.id}`,
    });
  };
  return (
    <Box
      padding={1}
      onClick={handleClick}
      className='hover:scale-105 rounded   transition duration-75 '>
      <img src={thumnailUrl} alt='' />
      <Typography variant='body2'>{product.name}</Typography>
      <Typography variant='body2' className='text-red-600'>
        <Box component='span' className='text-base font-bold'>
          {Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? (
          <span className='border border-red-500 bg-[#FAFAFA] ml-2 rounded'>
            -{product.promotionPercent}%
          </span>
        ) : null}
      </Typography>
    </Box>
  );
}

export default Product;
