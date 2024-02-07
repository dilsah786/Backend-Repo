import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const userDetail = {email,password};
    try {
      const result = await fetch(`${BaseUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetail),
      });

      const res = result.json();
      console.log(res);
      console.log("user Created");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      Register
      <h1>Register Page</h1>
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
        <button onClick={() => handleSubmit()}>Register</button>
      </div>
    </div>
  );
};

export default Register;
