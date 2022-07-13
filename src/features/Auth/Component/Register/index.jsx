import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import RegisterForm from "../RegisterForm";
import { register } from "../userSlice";


const Register = (props) => {
  const dispatch = useDispatch();
  const handleTodoFormSubmit = async (values) => {
    try {
        values.username = values.email;
        console.log("Form submit:", values);
        const action = register(values);
        const resultAction = await dispatch(action);
        const user = unwrapResult(resultAction);
        console.log("User", user)
    } catch (err) {
        console.error(err);
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
