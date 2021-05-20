import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { messages } from "../data/messages";
import "./styles.css";
import { Avatar, Tooltip } from "@chakra-ui/react";

const Chatbox = () => {
  const isSameSenderMargin = (m, i) => {
    if (
      i < messages.length - 1 &&
      messages[i + 1].sender._id === m.sender._id &&
      messages[i].sender._id !== "1"
    )
      return 33;
    else if (
      (i < messages.length - 1 &&
        messages[i + 1].sender._id !== m.sender._id &&
        messages[i].sender._id !== "1") ||
      (isLastMessage(i) && messages[i].sender._id !== "1")
    )
      return 0;
    else return "auto";
  };

  const isSameSender = (m, i) => {
    return (
      i < messages.length - 1 &&
      (messages[i + 1].sender._id !== m.sender._id ||
        messages[i + 1].sender._id == undefined) &&
      messages[i].sender._id !== "1"
    );
  };

  const isLastMessage = (i) => {
    return (
      i == messages.length - 1 &&
      messages[messages.length - 1].sender._id !== "1" &&
      messages[messages.length - 1].sender._id
    );
  };

  const isSameUser = (m, i) => {
    return i > 0 && messages[i - 1].sender._id === m.sender._id;
  };

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
      <Text fontSize="3xl" pb={3} fontFamily="Work sans">
        User we are chatting
      </Text>
      <Box
        d="flex"
        flexDir="column"
        justifyContent="flex-end"
        p={3}
        bg="#E8E8E8"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {messages.map((m, i) => (
          <div className="messages">
            {(isSameSender(m, i) || isLastMessage(i)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt="7px"
                  mr={1}
                  size="sm"
                  cursor="pointer"
                  name={m.sender.name}
                  // src={m.sender.pic}
                />
              </Tooltip>
            )}
            <span
              style={{
                marginLeft: `${m.sender._id === "1" ? `auto` : `0`}`,
                backgroundColor: `${
                  m.sender._id === "1" ? "#BEE3F8" : "#B9F5D0"
                }`,
                marginLeft: isSameSenderMargin(m, i),
                marginTop: isSameUser(m, i) ? 3 : 10,
                borderRadius: "20px",
                padding: "8px 15px",
                maxWidth: "75%",
              }}
            >
              {m.content}
            </span>
          </div>
        ))}

        <FormControl id="first-name" isRequired mt={3}>
          <Input
            variant="filled"
            bg="#E0E0E0"
            placeholder="Enter a message.."
          />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Chatbox;
