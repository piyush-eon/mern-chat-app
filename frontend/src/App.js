import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={Homepage}  />
      <Route path="/chats" component={Chatpage} />
      </Routes>
    </div>
  );
}

export default App;
