import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const LoginToHome = (e) => {
    e.preventDefault();
    console.log('works')
    navigate('/home')
  };
  return (
    <>
      <form onSubmit={LoginToHome}>
        <h1>Login</h1>
        <label>
          Username: <input autoComplete="off" type="text" />
        </label>
        <label>
          Email: <input autoComplete="off" type="email" />
        </label>
        <label>
          Password: <input autoComplete="off" type="password" />
        </label>

        <button>Login</button>
      </form>

      <p>
        Don't have an account? <Link to="..">Here</Link>{" "}
      </p>
    </>
  );
}

export default Login;
