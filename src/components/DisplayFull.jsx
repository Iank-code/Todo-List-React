// import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function DisplayFull() {
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const item = state.data
  return (
    <div>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h2>{item.category}</h2>
      <h2>{item.amount}</h2>
      <h2>{item.description}</h2>
    </div>
  );
}

export default DisplayFull;
