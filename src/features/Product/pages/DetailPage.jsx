import { Box, Container, Grid, Paper } from "@mui/material";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import productApi from "../../../api/productApi";
import { addToCart } from "../../Cart/cartSlice";
import AddToCartForm from "../components/AddToCartForm";
import ProductInfor from "../components/ProductInfor";
import ProductThumbnail from "../components/ProductThumbnail";

DetailPage.propTypes = {};

function DetailPage(props) {
  const { productId } = useParams();

  const [product, setProduct] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const response = await productApi.get(productId);
      setProduct(response);
      setIsloading(false);
    })();
  }, [productId]);

  const handleAddToCartForm = ({ quantity }) => {
    // if (JSON.parse(localStorage.getItem("user"))) {
    const action = addToCart({
      id: product.id,
      product,
      quantity: quantity,
    });
    dispatch(action);
    // } else {
    //   dispatch(openForm());
    //   return;
    // }
  };

  const description = DOMPurify.sanitize(product.description);

  return (
    <>
      {isLoading ? (
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-blue-400 flex items-center justify-center z-50'>
          <svg xmlns='http://www.w3.org/2000/svg' class='w-24 h-24 text-white animate-spin' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' />
          </svg>
        </div>
      ) : (
        <Container className='mt-16 pt-5'>
          <Paper elevation={0} className=''>
            <Grid container className='flex'>
              <Grid item className='w-[400px] border-r-2 p-4'>
                <ProductThumbnail product={product} />
              </Grid>
              <Grid item className='p-4 flex-1'>
                <ProductInfor product={product} />
                <AddToCartForm onSubmit={handleAddToCartForm} />
              </Grid>
            </Grid>
          </Paper>
          <Paper elevation={0} className='my-10 p-4'>
            <Box dangerouslySetInnerHTML={{ __html: description }} />
          </Paper>
        </Container>
      )}
    </>
  );
}

export default DetailPage;
