import { Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import Product from "./../components/Product";
import Slide from "../components/Slide";
import WhyUs from "./../components/WhyUs";

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
        setProductList(response.data.slice(0, 20));
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      {loading ? (
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-blue-400 flex items-center justify-center z-50'>
          <svg xmlns='http://www.w3.org/2000/svg' class='w-24 h-24 text-white animate-spin' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
          </svg>
        </div>
      ) : (
        <>
          <Slide />
          <Container className='mt-20'>
            <WhyUs />
            <Typography variant='h4' className='text-center font-bold'>
              Danh sách sản phẩm
            </Typography>
            <Paper elevation={0} className='p-4 grid grid-cols-4 pb-20'>
              {productList.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </Paper>
          </Container>
        </>
      )}
    </div>
  );
}

export default HomePage;
