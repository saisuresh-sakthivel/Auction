import React, { useState, useMemo } from "react";
import { login } from "../services/authService";
import Header from "./Header";
import Fields from "./Fields";
import registerImage from "../assets/register.png";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const loginFields = [
    { fieldId: "Email Address", name: "email", type: "email" },
    { fieldId: "Password", name: "password", type: "password" },
  ];
  const formFields = useMemo(() => {
    return loginFields.map((item) => (
      <Fields
        key={item.title}
        type={item.type}
        title={item.fieldId}
        name={item.name}
        placeholder={item.fieldId}
        handler={handleChange}
      ></Fields>
    ));
  }, loginFields);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(formData);
      onLogin(data.token);
      navigate("/home", { state: { name: data.name } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="form-container">
        <div className="form-container-left">
          <form className="auction_forms" onSubmit={handleSubmit}>
            <div className="form_content">
              <div className="heading">Login</div>
              <div className="disclaimer">
                Welcome back. Enter your credentials to access your account
              </div>
              {formFields}
              <button type="submit">Continue</button>
            </div>
            <div>
              Don't have an Account?{" "}
              <button onClick={handleClick} className="signup">
                Sign up here
              </button>
            </div>
          </form>
        </div>
        <div className="form-container-right">
          <img src={registerImage}></img>
        </div>
      </div>
    </>
  );
}

export default Login;
