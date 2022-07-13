import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import * as React from "react";
import { PropTypes } from "prop-types";
import { Controller } from "react-hook-form";
import { OutlinedInput } from "@mui/material";
export default function PasswordField(props) {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { form, name, label, disabled } = props;

  return (
    <Box className='mb-5 mt-2 w-full'>
      <FormControl fullWidth>
        <InputLabel htmlFor={`standard-adornment-password${label}`}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
            <OutlinedInput
              error={invalid}
              helperText={error?.message}
              onBlur={onBlur}
              name={name}
              value={value}
              onChange={onChange}
              label={label}
              id={`standard-adornment-password${label}`}
              type={values.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
          label={label}
          disabled={disabled}
        />
      </FormControl>
    </Box>
  );
}
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};
