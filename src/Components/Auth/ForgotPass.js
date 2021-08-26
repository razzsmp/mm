import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = props => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    if (isValid()) {
      props.forgot(email);
    }
  };

  const isValid = () => {
    const errors = [];
    if (!email.trim()) errors.push("email");
    setErrors(errors);
    return errors.length === 0;
  };

  return (
    <div className="ForgotPass">
      <h2>ForgotPassword</h2>
      <h3>We expected you to forget it haha</h3>
      <form onSubmit={handleSubmit}>
        <label
          style={{ color: errors.includes("email") ? "#d72323" : "white" }}
        >
          EMAIL
        </label>
        <input
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{
            borderColor: errors.includes("email")
              ? "#d72323"
              : "rgba(0,0,0,0.2)"
          }}
        />

        <button type="submit">Login</button>
    </div>
  );
};

export default ForgotPass;
