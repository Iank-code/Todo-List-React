import { Link } from "react-router-dom";

function Create() {
  const CreateTodo = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Link to="/home">Back</Link>
      <h1>Create Todo</h1>

      <form onSubmit={CreateTodo}>
        <label>
          Name: <input type="text" autoComplete="off" />
        </label>

        <label>
          Description: <input autoComplete="off" type="text" />
        </label>

        <input type="submit" value="Create Todo" style={{cursor: "pointer"}} />
      </form>
    </div>
  );
}

export default Create;
