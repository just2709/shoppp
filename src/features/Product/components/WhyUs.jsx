import React from "react";
import PropTypes from "prop-types";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { IconButton, Typography, Box } from "@mui/material";

WhyUs.propTypes = {};

function WhyUs(props) {
  return (
    <div className='grid grid-cols-3 text-center gap-10 mb-20'>
      <Box className='hover:drop-shadow-2xl bg-white rounded-[42px] px-[34px] py-[50px] transition duration-75 cursor-pointer'>
        <IconButton >
          <LocalShippingIcon color='primary' fontSize='large' className='m-5'/>
        </IconButton>
        <Typography variant='h5' className='mb-2'>FREE SHIPPING</Typography>
        <Typography variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
      </Box>
      <Box className='hover:drop-shadow-2xl bg-white rounded-[42px] px-[34px] py-[50px] transition duration-75 cursor-pointer'>
        <IconButton>
          <CurrencyExchangeIcon color='primary' fontSize='large' className='m-5' />
        </IconButton>
        <Typography variant='h5' className='mb-2'>100% REFUND</Typography>
        <Typography variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
      </Box>
      <Box className='hover:drop-shadow-2xl bg-white rounded-[42px] px-[34px] py-[50px] transition duration-75 cursor-pointer'>
        <IconButton>
          <SupportAgentIcon color='primary' fontSize='large' className='m-5'/>
        </IconButton>
        <Typography variant='h5' className='mb-2'>SUPPORT 24/7</Typography>
        <Typography variant='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
      </Box>
    </div>
  );
}

export default WhyUs;
