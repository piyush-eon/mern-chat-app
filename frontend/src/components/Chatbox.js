import { Box, Text } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { useEffect } from "react";

const Chatbox = ({ selectedChat, user }) => {
  useEffect(() => {
    // socket.on("connected", () => {
    //   console.log("true");
    // });
  }, []);

  return (
    <Box
      d="flex"
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w="68%"
      borderRadius="lg"
      borderWidth="1px"
    >
      {selectedChat ? (
        <SingleChat selectedChat={selectedChat} user={user} />
      ) : (
        <Box d="flex" alignItems="center" justifyContent="center" h="100%">
          <Text fontSize="3xl" pb={3} fontFamily="Work sans">
            Click on a user to start chatting
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default Chatbox;
