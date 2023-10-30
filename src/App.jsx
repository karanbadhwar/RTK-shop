import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./store/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
