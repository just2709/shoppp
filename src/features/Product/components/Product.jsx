import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { STATIC_HOST } from "../../../constants/common";

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const images = [
    "https://mixmathrealclothes.bluecore.vn//ImagesUpload/product_images_resize/31_74717847871e46401f0f_20220625151544180.jpg",
    "https://www.incimages.com/uploaded_files/image/1920x1080/getty_507716250_226806.jpg",
    "https://www.thefashionisto.com/wp-content/uploads/2017/07/Mens-Tuxedo.jpg",
    "https://i.pinimg.com/originals/33/f0/ba/33f0ba8b648ef76b01329c41808fe544.jpg",
    "https://i.pinimg.com/originals/c6/8a/fe/c68afe31167f062088bace44e5fba61e.jpg",
    "https://product.hstatic.net/200000037048/product/8f9e088b2ff7eca9b5e6_996bd85660c34592af995fa442e9e450.jpg",
    "https://i.pinimg.com/474x/0c/8c/fc/0c8cfcc8450c3779e40163ae9ad81d12.jpg",
    "http://lavenderstudio.com.vn/wp-content/uploads/2019/09/chup-hinh-quang-cao-quan-ao.jpg",
    "https://dtctech.vn/images/public/thang52017/35964_1_1.jpg",
    "https://nhatminhdecor.com/wp-content/uploads/2019/01/chup-anh-voi-mau-that-800x800.jpg",
    "https://vn-live-01.slatic.net/p/d74e1ec30321ccb3b9e40d5a93ec2221.jpg",
    "https://sakurafashion.vn/upload/images_294/54432364_2356989251180238_5168159053792149504_n.jpg",
    "https://cf.shopee.vn/file/fe2451710511f9ddb24d33dcf1621345",
    "https://cf.shopee.vn/file/5395ece881692cd85e0a417109693c32",
    "https://acup.vn/image/bai_viet/20-laptop-van-phong/laptop-van-phong-gia-re-acup_(1).jpg",
    "https://img.websosanh.vn/v10/users/review/images/ozdlr29t26rz7/156835990441_7770090.jpg?compress=85",
    "https://phongvu.vn/cong-nghe/wp-content/uploads/2020/09/5a017517f071c06b34e78555b9e5d742.jpg",
    "https://cdn.tgdd.vn/Files/2018/06/19/1096304/top-3-chup-hinh-dep-nhat-hien-nay-13.jpg",
    "https://cdn01.dienmaycholon.vn/filewebdmclnew/public//userupload/images/dien-thoai-Samsung-Galaxy-S10-Plus-1.jpg",
    "https://cdn.tgdd.vn/Files/2018/06/19/1096304/top-3-chup-hinh-dep-nhat-hien-nay-4.jpg",
    "https://cdn.tgdd.vn/Files/2021/06/13/1359968/vivoy725g1_800x450.jpg",
  ];
  const THUMBNAILPLACEHOLDER = images[Math.floor(Math.random() * images.length)];
  const thumnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAILPLACEHOLDER;

  const navigate = useNavigate();
  const handleClick = () => {
    // console.log(product.id);

    navigate({
      pathname: `/products/${product.id}`,
    });
  };
  return (
    <Box
      sx={{ m: 2, border: "1px solid grey[50]" }}
      padding={1}
      onClick={handleClick}
      className='hover:border-red-500 hover:scale-105 rounded-xl transition duration-75 grid place-items-center border group'>
      <img src={thumnailUrl} alt='' className='w-full h-auto object-scale-down' />
      {/* <Paper elevation={2} className='absolute hidden group-hover:block'>
        <IconButton>
          <FavoriteIcon color='primary' />
        </IconButton>
        <IconButton>
          <AddShoppingCartIcon color='primary' />
        </IconButton>
      </Paper> */}
      <Box className='text-center self-end'>
        <Typography variant='body2'>{product.name}</Typography>
        <Typography variant='body2' className='text-red-600'>
          <Box component='span' className='text-base font-bold'>
            {Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? <span className='border border-red-500 bg-[#FAFAFA] ml-2 rounded'>-{product.promotionPercent}%</span> : null}
        </Typography>
      </Box>
    </Box>
  );
}

export default Product;
