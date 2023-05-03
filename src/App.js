import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";
function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserList/>}>
          {" "}
        </Route>
        <Route path="/profile/" element={<UserProfile />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
