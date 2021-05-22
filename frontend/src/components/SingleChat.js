import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import "./styles.css";
import ScrollableFeed from "react-scrollable-feed";
import { Avatar, Spinner, Tooltip, useToast } from "@chakra-ui/react";
import {
  getSender,
  isLastMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { useEffect, useState } from "react";
import axios from "axios";

import io from "socket.io-client";
const ENDPOINT = "localhost:5000";
var socket;

const SingleChat = ({ selectedChat, user }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [istyping, setIsTyping] = useState(false);
  const toast = useToast();

  const fetchMessages = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      setLoading(true);

      const { data } = await axios.get(
        `/api/message/${selectedChat._id}`,
        config
      );
      console.log(data);
      setMessages(data);
      setLoading(false);

      socket.emit("join chat", selectedChat._id);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Messages",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const sendMessage = async (event) => {
    if (event.key === "Enter" && newMessage) {
      socket.emit("stop typing", selectedChat._id);
      // console.log(newMessage);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        };
        setNewMessage("");

        const { data } = await axios.post(
          "/api/message",
          {
            content: newMessage,
            chatId: selectedChat,
          },
          config
        );

        // console.log("local", data);
        socket.emit("new message", data);
        setMessages([...messages, data]);
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: "Failed to send the Message",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

  useEffect(() => {
    fetchMessages();
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    console.log("before", messages);

    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));

    // eslint-disable-next-line
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      setMessages([...messages, newMessageRecieved]);
    });
  });

  const typingHandler = (e) => {
    setNewMessage(e.target.value);

    if (!socketConnected) return;

    if (!typing) {
      // setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    // let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      // var timeNow = new Date().getDate();
      // var timeDiff = timeNow - lastTypingTime;
      // if (timeDiff >= timerLength)
      socket.emit("stop typing", selectedChat._id);
      setTyping(false);
    }, timerLength);
  };

  return (
    <>
      <Text fontSize="3xl" pb={3} fontFamily="Work sans">
        {messages && getSender(user, selectedChat.users)}
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
        {loading ? (
          <Spinner size="xl" w={20} h={20} alignSelf="center" margin="auto" />
        ) : (
          <div className="messages">
            <ScrollableFeed>
              {messages &&
                messages.map((m, i) => (
                  <div style={{ display: "flex" }} key={m._id}>
                    {(isSameSender(messages, m, i, user._id) ||
                      isLastMessage(messages, i, user._id)) && (
                      <Tooltip
                        label={m.sender.name}
                        placement="bottom-start"
                        hasArrow
                      >
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
                        backgroundColor: `${
                          m.sender._id === user._id ? "#BEE3F8" : "#B9F5D0"
                        }`,
                        marginLeft: isSameSenderMargin(
                          messages,
                          m,
                          i,
                          user._id
                        ),
                        marginTop: isSameUser(messages, m, i, user._id)
                          ? 3
                          : 10,
                        borderRadius: "20px",
                        padding: "5px 15px",
                        maxWidth: "75%",
                      }}
                    >
                      {m.content}
                    </span>
                  </div>
                ))}
            </ScrollableFeed>
          </div>
        )}

        <FormControl onKeyDown={sendMessage} id="first-name" isRequired mt={3}>
          {istyping ? <div>Someone is Typing...</div> : <></>}
          <Input
            variant="filled"
            bg="#E0E0E0"
            placeholder="Enter a message.."
            value={newMessage}
            onChange={typingHandler}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default SingleChat;
