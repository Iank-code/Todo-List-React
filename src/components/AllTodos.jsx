import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Chosen from "./Chosen";

export const TodoContext = createContext();

function AllTodos({ data }) {
  const navigate = useNavigate();

  const [selectedData, setSelectedData] = useState();
  const [isChosen, setIsChosen] = useState(false);

  function handleClick(x) {
    // console.log(x);
    // setSelectedData(data);
    setIsChosen(!isChosen);
    // navigate("/all");
    // console.log(r.description);
    // selectedData &&
    //   navigate("/all", {
    //     state: {
    //       data: selectedData,
    //     },
    //   });
  }

  return (
    <div>
      
      <h1 onClick={() => handleClick(data)}>{data.category}</h1>

      {isChosen ? <Chosen data={data} /> : null}
    </div>
  );
}

export default AllTodos;
