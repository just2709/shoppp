import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { STATIC_HOST, THUMBNAILPLACEHOLDER } from "../../../constants/common";

ProductThumbnail.propTypes = {};

function ProductThumbnail({ product }) {
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAILPLACEHOLDER;
  return (
    <Box>
      <img src={thumbnailUrl} width='100%' />
    </Box>
  );
}

export default ProductThumbnail;
