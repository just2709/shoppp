import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

const ProductSort = ({ currentSort, onChange }) => {
  const handleSortChange = (event, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs value={currentSort} onChange={handleSortChange}>
      <Tab label='Giá thấp tới cao' value='salePrice:ASC'></Tab>
      <Tab label='Giá cao tới thấp' value='salePrice:DESC'></Tab>
      <Tab></Tab>
    </Tabs>
  );
};

ProductSort.propTypes = {};

export default ProductSort;
