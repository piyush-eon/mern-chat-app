import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  const submitHandler = async () => {
    //   if (!name || !email || !password || !confirmpassword) {
    //     toast({
    //       title: "Please Fill all the Feilds",
    //       status: "warning",
    //       duration: 9000,
    //       isClosable: true,
    //       position: "bottom",
    //     });
    //     return;
    //   }
    console.log(
      name,
      email,
      password,
      confirmpassword,
      pic === undefined ? "" : pic
    );
    //   try {
    //     const config = {
    //       headers: {
    //         "Content-type": "application/json",
    //       },
    //     };
    //     const { data } = await axios.post(
    //       "/api/user",
    //       {
    //         name,
    //         email,
    //         password,
    //         confirmpassword,
    //         // pic === undefined ? "" : pic
    //       },
    //       config
    //     );
    //     console.log(JSON.stringify(data));
    //     localStorage.setItem("userInfo", JSON.stringify(data));
    //     history.push("/chats");
    //   } catch (error) {
    //     toast({
    //       title: "Error Occured!",
    //       description: error.message,
    //       status: "error",
    //       duration: 9000,
    //       isClosable: true,
    //       position: "bottom",
    //     });
    //   }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
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
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="pic">
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e) => setPic(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
