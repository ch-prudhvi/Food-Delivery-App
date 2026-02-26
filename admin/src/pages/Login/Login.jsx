import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ setToken }) => {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const url = "http://localhost:4000";

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (e) => {
    e.preventDefault();

    const response = await axios.post(url + "/api/admin/login", data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      navigate("/add");
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="login">
      <form onSubmit={onLogin} className="login-container">
        <h2>Admin Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChangeHandler}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChangeHandler}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;