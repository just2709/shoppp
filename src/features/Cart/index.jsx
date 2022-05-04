import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { cartItemsCountSelector } from "../../features/Cart/selectors";
import { Button, Container, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import Bill from "./components/Bill";

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({
      pathname: "/products",
    });
  };
  return (
    <Container className='mt-20 min-h-screen'>
      <h1 className='mb-2 font-bold text-xl'>Giỏ hàng ({cartItemsCount})</h1>
      {cartItemsCount === 0 ? (
        <Paper className='p-4 flex flex-col items-center'>
          <img src='https://salt.tikicdn.com/desktop/img/mascot@2x.png' />
          <h1 className='my-5'>Không có sản phẩm nào trong giỏ hàng của bạn</h1>
          <Button className='w-96' variant='contained' onClick={handleClick}>
            Tiếp tục mua sắm
          </Button>
        </Paper>
      ) : (
        <Grid container spacing={1} className=''>
          <Grid item className='w-3/4'>
            <Paper elevation={0} className='p-4'>
              <ProductList />
            </Paper>
          </Grid>
          <Grid item className='flex-1'>
            <Paper elevation={0} className='p-4'>
              <Bill />
            </Paper>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default CartFeature;
