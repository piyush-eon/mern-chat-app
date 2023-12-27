import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import ChatPage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
