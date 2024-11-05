import React, { useMemo, useState } from "react";
import { register } from "../services/authService";
import Header from "./Header";
import Fields from "./Fields";
import registerImage from "../assets/register.png";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const registeredFields = [
    { fieldId: "First Name", name:"firstname", type: "text" },
    { fieldId: "Last Name", name:"lastname", type: "text" },
    { fieldId: "Email Address", name:"email", type: "email" },
    { fieldId: "Password", name:"password", type: "password" },
  ];
  const formFields = useMemo(() => {
    return registeredFields.map((item) => (
      <Fields
        key={item.title}
        type={item.type}
        title={item.fieldId}
        name={item.name}
        placeholder={item.fieldId}
        handler={handleChange}
      ></Fields>
    ));
  }, registeredFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(formData);
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
              <div className="heading">Sign Up</div>
              <div className="disclaimer">New bidders, as soon as you have submitted your information you will be eligible to bid in the action</div>
              {formFields}
              <button type="submit">Register</button>
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

export default Register;
