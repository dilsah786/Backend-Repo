import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = async () => {
    const userDetail = {
      email,
      password,
    };
    try {
      const result = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail),
      });

      const res = await result.json();
      console.log(res);
      setToken(res.token);
      if (res.token) {
        console.log("Logged in");
      } else {
        console.log("User Not Found");
      }
    } catch (err) {
      console.log(err);
      console.log("User not Found");
    }
  };

  localStorage.setItem("token", JSON.stringify(token));

  return (
    <div>
      Login
      <h1>Login Page</h1>
      <div>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => handleLogin()}>Log in</button>
      </div>
    </div>
  );
};

export default Login;
