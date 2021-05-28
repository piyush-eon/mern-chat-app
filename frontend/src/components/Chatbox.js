import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";

const Chatbox = ({
  selectedChat,
  user,
  setSelectedChat,
  fetchAgain,
  setFetchAgain,
  notification,
  setNotification,
}) => {
  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <SingleChat
        setSelectedChat={setSelectedChat}
        selectedChat={selectedChat}
        user={user}
        fetchAgain={fetchAgain}
        setFetchAgain={setFetchAgain}
        notification={notification}
        setNotification={setNotification}
      />
    </Box>
  );
};

export default Chatbox;
