import { useState } from "react";

function EditText({ id }) {
  const [newTodo, setNewTodo] = useState("");
  const [newCompleted, setNewCompleted] = useState("");
  const saveData = (e) => {
    e.preventDefault();
    const body = {
      todo: newTodo,
      completed: newCompleted,
    };

    fetch(`https://json-server-vercel-lake.vercel.app/todos/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        completed: newCompleted,
        todo: newTodo,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          console.log(res.status);
        }
        console.log(res.status);
        res.json();
      })
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <form onSubmit={saveData}>
      <label>
        Todo:{" "}
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          autoComplete="off"
        />
      </label>
      <label>
        completed:{" "}
        <input
          autoComplete="off"
          type="text"
          value={newCompleted}
          onChange={(e) => setNewCompleted(e.target.value)}
        />
      </label>

      <button type="submit">Save</button>
    </form>
  );
}

function Chosen({ data }) {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <p
        style={{
          fontSize: "20px",
        }}
      >
        {data.amount}
      </p>
      <p
        style={{
          fontSize: "20px",
        }}
      >
        {data.completed}
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <button
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            Rename
          </button>

          <button
            onClick={() => {
              fetch(
                `https://json-server-vercel-lake.vercel.app/todos/${data.id}`,
                {
                  method: "DELETE",
                }
              ).then((res) => {
                if (!res.ok) {
                  console.log(res.status);
                }
                console.log(res.status);
                res.json();
              });
            }}
          >
            Delete
          </button>
        </div>
        {isEdit ? <EditText id={data.id} /> : null}
      </div>
    </div>
  );
}

export default Chosen;
