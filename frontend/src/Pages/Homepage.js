import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

function Homepage() {
  const history = useHistory();
  const [boxColor, setBoxColor] = useState("white"); // new state variable

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        bg={boxColor}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
          <Button
          position="absolute"
          bottom="10"
          left="10"
          variant="solid"
          size="md"
          borderRadius="full"
          mr={4}
          onClick={() => {
            setBoxColor(boxColor === "black" ? "white" : "black");
          }}
        >
          D
        </Button>
        <Text fontSize="4xl" fontFamily="Work sans" color={boxColor === "black" ? "whatsapp.100" : "black"}>
          Surmai and Harshit
        </Text>
      </Box>
      <Box bg={boxColor} w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab color={boxColor === "black" ? "whatsapp.100" : "black"}>Login</Tab>
            <Tab color={boxColor === "black" ? "whatsapp.100" : "black"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login boxColor={boxColor}/>
            </TabPanel>
            <TabPanel>
              <Signup boxColor={boxColor}/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
