import React, { useState } from "react";
import UsePost from "../hooks/UsePost";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // For checking if password && confirmPassword matches
  //   const [error, setError] = useState("");
  //   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: email,
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    });

    // navigate("/home");

    // if (password !== confirmPassword) {
    //   setError("Passwords do not match");

    //   setTimeout(() => {
    //     setError("");
    //   }, 2000);
    // } else {
    //   console.log({ email, username, tel, password, confirmPassword });

    fetch("http://localhost:8000/credentials", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        // password_digest: password,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(res.json());
        throw new Error("Network response was not ok.");
      }
    });
    // .then((data) => {
    //   console.log(data);
    //   alert("Registration successful.");
    //   navigate("/home");
    // })
    // .catch((error) => {
    //   console.error("Error:", error);
    //   alert("Registration failed. Please try again.");
    // });

    // }
    // const { errors } = UsePost({
    //   url: "http://127.0.0.1:3000/users",
    //   body: {
    // email: email,
    // username: username,
    // password_digest: password
    //     // confirmPassword: confirmPassword,
    //   },
    // });
    // if (errors) {
    //   return <p>An error occurred: {error.message}</p>;
    // }
  };

  return (
    <div
      style={{
        marginBottom: "3rem",
      }}
      className="signup__container form"
    >
      <h2>Sign up </h2>
      <img
        style={{
          width: "350px",
        }}
        // src={require("../../assets/up-amico.png")}
      />
      <form className="signup__form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          autoComplete="off"
          type="email"
          name="email"
          id="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          autoComplete="off"
          type="text"
          id="username"
          name="username"
          minLength={5}
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          autoComplete="off"
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="confirm password">Confirm Password</label>
        <input
          autoComplete="off"
          type="password"
          name="confirm password"
          id="confirmpassword"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        <button>SIGN UP</button>
        <p>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "red", cursor: "pointer" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
