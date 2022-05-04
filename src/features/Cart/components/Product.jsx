import React from "react";
import PropTypes from "prop-types";
import { STATIC_HOST, THUMBNAILPLACEHOLDER } from "../../../constants/common";
import QuantityField from "../../../components/form-controls/QuantityField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeFromCart } from "../cartSlice";
import { useDispatch } from "react-redux";

Product.propTypes = {};

function Product({ product, quantity }) {
  const dispatch = useDispatch();

  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAILPLACEHOLDER;
  const schema = yup.object().shape({
    quantity: yup
      .number("Quantity is a number")
      .required("Please enter a quantity")
      .min(1, "Quantity > 0"),
  });
  const form = useForm({
    defaultValues: {
      quantity: quantity,
    },
    resolver: yupResolver(schema),
  });
  const handleDeleteProduct = () => {
    const action = removeFromCart({
      id: product.id,
      product,
      quantity: quantity,
    });
    dispatch(action);
  };

  return (
    <div className='flex items-center justify-between border-t'>
      <img className='w-20' src={thumbnailUrl} />
      <h1 className='w-1/5'>{product.name}</h1>
      <h1 className='w-2/12 font-semibold'>
        {Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.salePrice)}

        {product.isPromotion ? (
          <span className='text-xs line-through font-normal ml-2'>
            {Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.originalPrice)}
          </span>
        ) : (
          ""
        )}
      </h1>
      <QuantityField
        product={product}
        id={product.id}
        label='Số lượng'
        name='quantity'
        form={form}
      />
      <h1>
        {Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(product.salePrice * quantity)}
      </h1>
      <IconButton onClick={handleDeleteProduct}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Product;
