import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/Actions/CakeAction";

const CakeCom = () => {
  const [value, setValue] = useState(1);
  const { numOfCake } = useSelector((store) => store.cake);
  const dispatch = useDispatch();

  return (
    <section className="container">
      <h2>amount cake:{numOfCake}</h2>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <button disabled={numOfCake === 0} onClick={() => dispatch(buyCake(value))}>
        buy {value} cake
      </button>
    </section>
  );
};

export default CakeCom;
