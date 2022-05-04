import React from "react";
import PropTypes from "prop-types";

import { Box, IconButton, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { removeFromCart, setQuantity } from "../../../features/Cart/cartSlice";

const QuantityField = (props) => {
  const { form, name, label, disabled, onChange, product, id } = props;
  // const handleChange = () => {
  //   console.log(form.getValues(name));
  // };
  const dispatch = useDispatch();
  const handleChangeQuantity = (quantity) => {
    if (onChange) return;
    if (quantity <= 0) {
      const action = removeFromCart({
        id: product.id,
        product,
        quantity: quantity,
      });
      dispatch(action);
    } else {
      const action = setQuantity({
        id: id,
        product,
        quantity: quantity,
      });
      dispatch(action);
    }
  };
  if (form)
    return (
      <Controller
        name={name}
        control={form.control}
        fullWidth
        render={({
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, error, isDirty, disabled },
        }) => (
          <Box className='flex max-w-xs'>
            <IconButton
              onClick={() => {
                form.setValue(name, Number.parseInt(value) - 1);
              }}>
              <RemoveCircleOutline />
            </IconButton>

            <TextField
              InputProps={{ inputProps: { min: 0, max: 10 }, readOnly: true }}
              type='number'
              error={invalid}
              isDirty={isDirty}
              helperText={error?.message}
              onBlur={onBlur}
              name={name}
              value={value}
              onChange={handleChangeQuantity(value)}
              label={label}
              size='small'
            />
            <IconButton
              onClick={() => form.setValue(name, Number.parseInt(value) + 1)}>
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
        label={label}
        disabled={disabled}
      />
    );
};

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default QuantityField;
