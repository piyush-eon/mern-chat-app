import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../Context/ChatProvider";
import { useLocation } from 'react-router-dom';

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();
  const location = useLocation();
  const boxColor = location.state?.boxColor || 'white';
  console.log(boxColor);
  
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px" >
        {user && <MyChats fetchAgain={fetchAgain} boxColor={boxColor} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} boxColor={boxColor}/>
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
