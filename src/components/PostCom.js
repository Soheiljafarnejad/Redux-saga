import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/Actions/PostActions";

const PostCom = () => {
  const [value, setValue] = useState(1);
  const { loading, error, data } = useSelector((store) => store.post);
  const dispatch = useDispatch();
  return (
    <section className="container">
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(fetchPostRequest(value))}>
        show post
      </button>

      <div className="box">
        {loading ? (
          <p>loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data.userId ? (
          <ul>
            <li>id: {data.id}</li>
            <li>post title: {data.title}</li>
            <li>post body: {data.body}</li>
          </ul>
        ) : (
          <p>please enter value id </p>
        )}
      </div>
    </section>
  );
};

export default PostCom;
