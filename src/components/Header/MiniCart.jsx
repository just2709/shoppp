import React from "react";
import PropTypes from "prop-types";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch } from "react-redux";
import { hideMiniCart } from "../../features/Cart/cartSlice";
import { useNavigate } from "react-router-dom";

MiniCart.propTypes = {};

function MiniCart(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleHideCart = (e) => {
    e.stopPropagation();
    const action = hideMiniCart();
    dispatch(action);
  };
  const handleOpenCart = (e) => {
    e.stopPropagation();

    const action = hideMiniCart();
    dispatch(action);
    navigate({
      pathname: "cart",
    });
  };

  return (
    <div
      className='absolute right-0 z-20 top-16 bg-white p-4 cursor-default'
      onClick={(e) => e.stopPropagation()}>
      <CloseIcon
        color='primary'
        className='absolute right-2 top-2 cursor-pointer'
        onClick={handleHideCart}
      />
      <h1 className='text-black text-base py-1'>
        <CheckCircleIcon className='text-green-600' />
        Thêm vào giỏ hàng thành công!
      </h1>
      <Button className='w-80' variant='contained' onClick={handleOpenCart}>
        Xem giỏ hàng và thanh toán
      </Button>
    </div>
  );
}

export default MiniCart;
