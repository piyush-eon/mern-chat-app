import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [chats, setChats] = useState();
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const [notification, setNotification] = useState([]);

  return (
    <div style={{ width: "100%" }}>
      {user && (
        <SideDrawer
          setChats={setChats}
          chats={chats}
          notification={notification}
          setNotification={setNotification}
        />
      )}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && (
          <MyChats chats={chats} setChats={setChats} fetchAgain={fetchAgain} />
        )}
        {user && (
          <Chatbox
            fetchAgain={fetchAgain}
            setFetchAgain={setFetchAgain}
            notification={notification}
            setNotification={setNotification}
          />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
