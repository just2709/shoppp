import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";

FilterByService.propTypes = {};

function FilterByService({ filters, onChange }) {
  const handleValueChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    if (checked === "false") {
      console.log(checked);
      onChange({ [name]: "" });
    } else {
      onChange({ [name]: checked });
    }
  };

  return (
    <Box className='border-t-2 py-4'>
      <h1 className='font-semibold'>Dịch vụ</h1>
      <ul>
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Miễn phí vận chuyển" },
        ].map((service, index) => (
          <li key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleValueChange}
                  name={service.value}
                />
              }
              label={service.label}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
