import React from "react";
import PropTypes from "prop-types";
import { cartItemsCountSelector, cartTotalSelector } from "../selectors";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { removeAllCart } from "../cartSlice";

Bill.propTypes = {};

function Bill(props) {
  const cartTotal = useSelector(cartTotalSelector);
  const cartItemsCount = useSelector(cartItemsCountSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBuy = () => {
    alert(
      "Tính năng mua hàng chỉ tạm dừng lại ở mức xóa sản phẩm khỏi giỏi hàng. Thanks"
    );
    const action = removeAllCart();
    dispatch(action);
    navigate({
      pathname: "/products",
    });
  };
  return (
    <>
      <div className='flex justify-between'>
        <h1 className='font-semibold'>Tổng tiền:</h1>
        <div className='flex flex-col'>
          <h1 className='text-red-600 text-right'>
            {Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(cartTotal)}
          </h1>
          <h1 className='text-sm mb-5'>(Đã bao gồm VAT nếu có)</h1>
        </div>
      </div>
      <Button
        onClick={handleBuy}
        className='w-full'
        variant='contained'
        type='submit'>
        Mua hàng ({cartItemsCount})
      </Button>
    </>
  );
}

export default Bill;
