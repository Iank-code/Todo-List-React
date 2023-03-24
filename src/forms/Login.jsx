import { Link } from "react-router-dom";

function Login() {
  const LoginToHome = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={LoginToHome}>
        <h1>Login</h1>
        <label>
          Username: <input type="text" />
        </label>
        <label>
          Email: <input type="email" />
        </label>
        <label>
          Password: <input type="password" />
        </label>

        <button type="submit">Login</button>
      </form>

      <p>Don't have an account? <Link to="..">Here</Link> </p>
    </>
  );
}

export default Login;
