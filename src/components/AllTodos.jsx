import { useState, createContext } from "react";
// import { useNavigate } from "react-router-dom";
import Chosen from "./Chosen";

export const TodoContext = createContext();

function AllTodos({ data }) {
  // const navigate = useNavigate();

  // const [selectedData, setSelectedData] = useState();
  const [isChosen, setIsChosen] = useState(false);

  function handleClick() {
    setIsChosen(!isChosen);
  }
 

  return (
    <div>
      <h2 onClick={() => handleClick(data)}>{data.todo}</h2>

      {isChosen ? <Chosen data={data} /> : null}
    </div>
  );
}

export default AllTodos;
