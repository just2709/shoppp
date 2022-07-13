import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import QuantityField from "../../../components/form-controls/QuantityField";
import { showMiniCart } from "../../Cart/cartSlice";
import { useDispatch } from "react-redux";
import { openForm } from "../../Auth/Component/userSlice";

AddToCartForm.propTypes = {};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup.number("Quantity is a number").required("Please enter a quantity").min(1, "Quantity > 0"),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    if (JSON.parse(localStorage.getItem("user"))) {
      if (onSubmit) await onSubmit(values);
    }
  };

  const dispatch = useDispatch();
  const handleShowCart = () => {
    if (JSON.parse(localStorage.getItem("user"))) {
      const action = showMiniCart();
      dispatch(action);
    } else {
      dispatch(openForm());
    }
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className='my-5 border-t py-5 space-y-2'>
      <QuantityField label='Số lượng' name='quantity' form={form} />
      <Button className='w-96' variant='contained' type='submit' onClick={handleShowCart}>
        Chọn Mua
      </Button>
    </form>
  );
}

export default AddToCartForm;
