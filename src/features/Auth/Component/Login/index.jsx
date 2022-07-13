import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { renderCartAfterLogin } from "../../../Cart/cartSlice";
import LoginForm from "../LoginForm/index";
import { login } from "../userSlice";
import axios from "axios";
import { useState } from "react";
import { useSnackbar } from "notistack";

const Login = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleFormSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      setTimeout(function () {
        dispatch(renderCartAfterLogin());
      }, 1200);
      enqueueSnackbar(`Xin chào ${user.fullName}`, { variant: "success", autoHideDuration: 2000 });
    } catch (err) {
      if (err.message === "Identifier or password invalid.") {
        enqueueSnackbar("Tài khoản hoặc mật khẩu không đúng", { variant: "error", autoHideDuration: 2000 });
      } else {
        let data = {
          q: err.message,
          source: "en",
          target: "vi",
        };
        axios.post(`https://libretranslate.de/translate`, data).then((response) => {
          enqueueSnackbar(response.data.translatedText, { variant: "error", autoHideDuration: 2000 });
        });
      }
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleFormSubmit} />
    </div>
  );
};

Login.propTypes = {};

export default Login;
