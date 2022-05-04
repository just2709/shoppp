import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Grid, Paper, Box, Skeleton } from "@mui/material";
import ProductThumbnail from "../components/ProductThumbnail";
import { useParams } from "react-router-dom";
import productApi from "../../../api/productApi";
import ProductInfor from "../components/ProductInfor";
import AddToCartForm from "../components/AddToCartForm";
import DOMPurify from "dompurify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Cart/cartSlice";

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
    const action = addToCart({
      id: product.id,
      product,
      quantity: quantity,
    });
    dispatch(action);
  };

  const description = DOMPurify.sanitize(product.description);

  return (
    <>
      {isLoading ? (
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-red-400 flex items-center justify-center z-0'>
          <div className=' w-16 h-16 border-4 border-white border-dotted rounded-full animate-spin'></div>
        </div>
      ) : (
        <Container className='mt-20'>
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
