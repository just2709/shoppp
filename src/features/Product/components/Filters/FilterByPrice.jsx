import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField } from "@mui/material";

FilterByPrice.propTypes = {};

function FilterByPrice({ onChange }) {
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });
  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (onChange) onChange(values);
    setValues({
      salePrice_gte: 0,
      salePrice_lte: 0,
    });
  };

  return (
    <Box className='border-t-2 py-4'>
      <h1 className='font-semibold'>Giá</h1>
      <Box className='flex items-center space-x-1 mb-2 mt-2'>
        <TextField
          name='salePrice_gte'
          value={values.salePrice_gte}
          onChange={handleValueChange}
          size='small'
        />
        <span>-</span>
        <TextField
          name='salePrice_lte'
          value={values.salePrice_lte}
          onChange={handleValueChange}
          size='small'
        />
      </Box>
      <Button variant='contained' size='small' onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
