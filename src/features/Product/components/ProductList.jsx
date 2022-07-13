import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, Paper, Skeleton } from "@mui/material";
import Product from "./Product";

ProductList.propTypes = {};

ProductList.defaultProps = {
  data: [],
};

function ProductList({ data }) {
  return (
    <Box>
      <Paper elevation={0} className='p-4 grid grid-cols-4 pb-20'>
        {data.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Paper>
    </Box>
  );
}

export default ProductList;
