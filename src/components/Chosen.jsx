import { useState } from "react";

function EditText({ id }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const saveData = (e) => {
    e.preventDefault();
    const body = {
      title: newTitle,
      description: newDescription,
    };

    fetch(`http://localhost:8000/transactions/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        description: newDescription,
        category: newTitle,
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
        Title:{" "}
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </label>
      <label>
        Description:{" "}
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
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
        {data.description}
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
              fetch(`http://localhost:8000/transactions/${data.id}`, {
                method: "DELETE",
              }).then((res) => {
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
