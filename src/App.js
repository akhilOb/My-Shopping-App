import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux";
import Router from "./Router/route";

function App() {
  return (
    // <div>Hi</div>
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
