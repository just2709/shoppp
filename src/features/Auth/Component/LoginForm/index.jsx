import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-controls/InputField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LockOutlined } from "@mui/icons-material";
import { Avatar, Button, Typography } from "@mui/material";
import PasswordField from "../../../../components/form-controls/PasswordField/index.";
import { deepOrange } from "@mui/material/colors";

const LoginForm = (props) => {
  const schema = yup.object({
    identifier: yup.string().required("Hãy nhập Email").email("Email không hợp lệ"),
    password: yup.string().required("Hãy nhập mật khẩu"),
  });

  LoginForm.propTypes = {
    onSubmit: PropTypes.func,
  };

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    // form.reset();
  };

  return (
    <div className='px-5 py-10 text-center w-[30rem]'>
      <Avatar className='mx-auto' sx={{ bgcolor: deepOrange[500] }}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography>Đăng nhập</Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name='identifier' label='Email/Tài khoản' form={form} />
        <PasswordField name='password' label='Mật khẩu' form={form} />
      </form>
      <Button type='submit' fullWidth variant='contained' onClick={form.handleSubmit(handleSubmit)}>
        Đăng nhập
      </Button>
    </div>
  );
};

export default LoginForm;
