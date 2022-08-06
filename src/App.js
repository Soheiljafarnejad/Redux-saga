import { Provider } from "react-redux";
import CakeCom from "./components/CakeCom";
import IceCom from "./components/IceCom";
import PostCom from "./components/PostCom";
import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeCom />
        <IceCom />
        <PostCom />
      </div>
    </Provider>
  );
}

export default App;
