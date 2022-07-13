import React from "react";
import PropTypes from "prop-types";

import { TextField, Box } from "@mui/material";
import { Controller } from "react-hook-form";

const InputField = (props) => {
  const { form, name, label, disabled } = props;
  return (
    <Box className='mb-5 mt-2'>
      <Controller
        name={name}
        control={form.control}
        fullWidth
        variant='outline'
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
          <TextField error={invalid} helperText={error?.message} onBlur={onBlur} name={name} value={value} onChange={onChange} label={label} fullWidth />
        )}
        label={label}
        disabled={disabled}
      />
    </Box>
  );
};

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputField;
