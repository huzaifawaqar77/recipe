import Styles from "./AdminLogin.module.css";
import { useState } from "react";
const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const admin = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const adminResponse = await admin.json();
    if (admin.ok && adminResponse) {
      alert("Login Successful");
      localStorage.setItem("token", adminResponse.token);
      window.location.href = "/dashboard";
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className={Styles.admin_login}>
      <h1>ADMIN LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
        <label>password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default AdminLogin;
