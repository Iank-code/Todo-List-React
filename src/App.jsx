import "./App.css";
import AllTodos from "./components/AllTodos";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/todos")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <div className="App">
      <div>
        <Link to="/create">Add Todo</Link>
        <br />

        {items
          ? items.map((r, index) => (
              <div key={index}>
                <AllTodos data={r} />
              </div>
            ))
          : null}

        {/* <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo</th>
              <th>Status</th>
              <th>Rename</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {items
                  ? items.map((r, index) => (
                      <div key={index}>
                        
                        <td>{r.id}</td>
                      </div>
                    ))
                  : null}
              </td>
              <td>
                {items
                  ? items.map((r, index) => (
                      <div key={index}>
                        
                        <td>{r.todo}</td>
                      </div>
                    ))
                  : null}
              </td>
              <td>
                {items
                  ? items.map((r, index) => (
                      <div key={index}>
                        
                        <td>{r.completed}</td>
                      </div>
                    ))
                  : null}
              </td>
              <td>
                {items
                  ? items.map((r, index) => (
                      <div key={index}>
                        
                        <input value="Delete" />
                      </div>
                    ))
                  : null}
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
}

export default App;
