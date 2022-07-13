import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import { register } from "../userSlice";
import { useSnackbar } from "notistack";
import { useState } from "react";
import axios from "axios";
const Register = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [resultText, setResultText] = useState("");
  const handleTodoFormSubmit = async (values) => {
    try {
      values.username = values.email;
      // console.log("Form submit:", values);
      const action = register(values);
      const resultAction = await dispatch(action);
      const user = unwrapResult(resultAction);
      enqueueSnackbar(`Đăng ký thành công. Xin chào ${user.fullName}`, { variant: "success", autoHideDuration: 1000 });
    } catch (err) {
      // console.log(err.message);

      let data = {
        q: err.message,
        source: "en",
        target: "vi",
      };
      axios.post(`https://libretranslate.de/translate`, data).then((response) => {
        // setResultText(response.data.translatedText);
        enqueueSnackbar(response.data.translatedText, { variant: "error", autoHideDuration: 2000 });
      });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleTodoFormSubmit} />
    </div>
  );
};

Register.propTypes = {};

export default Register;
