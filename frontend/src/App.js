import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import {
  Box,
  Button,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="App">
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          p={3}
          bg="white"
          w="100%"
          m="40px 0 15px 0"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="Work sans">
            MERN CHAT APP
          </Text>
        </Box>
        <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
          <Tabs isFitted variant="soft-rounded">
            <TabList mb="1em">
              <Tab>Login</Tab>
              <Tab>Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing="10px">
                  <FormControl id="email" isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter Your Email Address"
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <Button
                    colorScheme="blue"
                    width="100%"
                    style={{ marginTop: 15 }}
                  >
                    Login
                  </Button>
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack spacing="5px">
                  <FormControl id="first-name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Enter Your Name" />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input
                      type="email"
                      placeholder="Enter Your Email Address"
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Confirm your Password"
                    />
                  </FormControl>
                  <FormControl id="pic">
                    <FormLabel>Upload your Picture</FormLabel>
                    <Input
                      type="file"
                      p={1.5}
                      accept="image/*"
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                      }}
                    />
                  </FormControl>
                  <Button
                    colorScheme="blue"
                    width="100%"
                    style={{ marginTop: 15 }}
                  >
                    Sign Up
                  </Button>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
}

export default App;
