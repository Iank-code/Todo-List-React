import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";

function Create() {
  const navigate = useNavigate()

  const [todo, setTodo] = useState("");
  const [status, setStatus] = useState("");

  const CreateTodo = (e) => {
    e.preventDefault();
    const body = {
      todo: todo,
      completed: status
    };

    fetch("https://json-server-vercel-lake.vercel.app/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (!res.ok) {
        console.log(res.status);
      }
      navigate("/home");
      res.json();
    });

    console.log(body)
  };
  return (
    <div>
      <Link to="/home">Back</Link>
      <h1>Create Todo</h1>

      <form onSubmit={CreateTodo}>
        <label>
          Todo:{" "}
          <input
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            autoComplete="off"
            value={todo}
          />
        </label>

        <label>
          Status:{" "}
          <input
            onChange={(e) => setStatus(e.target.value)}
            autoComplete="off"
            type="text"
            value={status}
          />
        </label>

        <input
          type="submit"
          value="Create Todo"
          style={{ cursor: "pointer" }}
        />
      </form>
    </div>
  );
}

export default Create;
