import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/SideDrawer";

const Chatpage = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    // console.log(userInfo);

    if (!userInfo) history.push("/");
  }, [history]);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer user={user} />}
      <div
        style={{
          width: "100%",
          height: "91.5vh",
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        {user && (
          <MyChats
            user={user}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        )}
        {user && <Chatbox selectedChat={selectedChat} user={user} />}
      </div>
    </div>
  );
};

export default Chatpage;
