import "./App.css";
import AllTodos from "./components/AllTodos";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/transactions")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  return (
    <div className="App">
      <div>
        {data
          ? data.map((r, index) => (
              // <h1
              //   onClick={() => handleClick(r)}
              //   key={index}
              //   style={{
              //     cursor: "pointer",
              //   }}
              // >
              //   {r.category}
              // </h1>
              <div key={index}>
                <AllTodos data={r} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
