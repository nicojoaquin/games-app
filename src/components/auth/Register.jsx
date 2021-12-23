import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startRegister } from "../../redux/actions/auth/startRegister";
import { addAlert } from "../assets/alert";

const Register = () => {
  const dispatch = useDispatch();

  const [formRegisterValues, handleRegisterInput] = useForm({
    regName: "",
    regEmail: "",
    regPass1: "",
    regPass2: "",
  });

  const { regName, regEmail, regPass1, regPass2 } = formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (regPass1 !== regPass2)
      return addAlert("Passwords do not match", "error");

    dispatch(startRegister(regEmail, regPass1, regName, "auth/new"));
  };

  return (
    <form className="bg-light rounded-3 p-5 authForm" onSubmit={handleRegister}>
      <h2 className="text-secondary fs-4 text-center">Sign up</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="regName"
          value={regName}
          onChange={handleRegisterInput}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder=" Email address"
          name="regEmail"
          value={regEmail}
          onChange={handleRegisterInput}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="regPass1"
          value={regPass1}
          onChange={handleRegisterInput}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Repeat your password"
          name="regPass2"
          value={regPass2}
          onChange={handleRegisterInput}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Submit
      </button>
    </form>
  );
};

export default Register;
