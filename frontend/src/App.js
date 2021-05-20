import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={Chatpage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
