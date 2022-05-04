import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import productApi from "../../../api/productApi";
import { Container, Grid, Paper } from "@mui/material";
import Product from "./../components/Product";

HomePage.propTypes = {};

function HomePage(props) {
  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const response = await productApi.getAll(1);
        setProductList(response.data.slice(0, 30));
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <Container className='mt-20'>
      Website này chỉ tập trung làm phần giỏ hàng. Thanks
      <Paper elevation={0} className='p-4 grid grid-cols-6'>
        {productList.map((product) => (
          <Grid item key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Paper>
    </Container>
  );
}

export default HomePage;
