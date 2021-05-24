import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";

const Chatpage = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [chats, setChats] = useState();
  const [fetchAgain, setFetchAgain] = useState(false);

  const [selectedChat, setSelectedChat] = useState();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    // console.log(userInfo);

    if (!userInfo) history.push("/");
  }, [history]);

  return (
    <div style={{ width: "100%" }}>
      {user && (
        <SideDrawer
          user={user}
          setSelectedChat={setSelectedChat}
          setChats={setChats}
          chats={chats}
        />
      )}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && (
          <MyChats
            user={user}
            chats={chats}
            setChats={setChats}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            fetchAgain={fetchAgain}
          />
        )}
        {user && (
          <Chatbox
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
            user={user}
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
          />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
