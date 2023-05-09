import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { useState, useEffect } from "react";

function App() {

  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    let randomNumber = 1;
    for (let i = 0; i < 10; i++) {
      randomNumber = Math.floor(Math.random() * 8) + 1;
    }
    const imageUrl = `image${randomNumber}.jpg`;
    console.log(imageUrl);
    setBackgroundImage(`url(${imageUrl})`);
  }, []);

  return (
    <div className="App" style={{ backgroundImage: backgroundImage }}>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;
  