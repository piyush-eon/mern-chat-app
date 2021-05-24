import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Input,
  Text,
  useToast,
  Box,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const GroupChatModal = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleGroup = (userToAdd) => {
    if (selectedUsers.includes(userToAdd)) {
      toast({
        title: "User already added",
        status: "warning",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    setSelectedUsers([...selectedUsers, userToAdd]);
  };

  const handleSearch = async (query) => {
    setSearch(query);
    if (!query) {
      return;
    }

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);
      console.log(data);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  return (
    <>
      <span onClick={onOpen}>{children}</span>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontSize="35px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            Create Group Chat
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody d="flex" flexDir="column" alignItems="center">
            {/* <Text fontSize="27px" pb={3} fontFamily="Work sans">
              Email: {user.email}
            </Text> */}
            <FormControl>
              <Input placeholder="Chat Name" mb={3} />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Add Users"
                mb={1}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl>
            <Box w="100%" d="flex" flexWrap="wrap">
              {selectedUsers.map((u) => (
                <Badge
                  px={2}
                  py={1}
                  borderRadius="lg"
                  m={1}
                  mb={2}
                  variant="solid"
                  fontSize={12}
                  colorScheme="purple"
                  cursor="pointer"
                  onClick={() => console.log(u.name)}
                >
                  {u.name}
                </Badge>
              ))}
            </Box>
            {loading ? (
              // <ChatLoading />
              <div>ed</div>
            ) : (
              searchResult?.map((user) => (
                <Box
                  onClick={() => handleGroup(user)}
                  cursor="pointer"
                  bg="#E8E8E8"
                  _hover={{
                    background: "#38B2AC",
                    color: "white",
                  }}
                  w="100%"
                  d="flex"
                  alignItems="center"
                  color="black"
                  px={3}
                  py={2}
                  mb={2}
                  key={user._id}
                  borderRadius="lg"
                >
                  <Avatar
                    mr={2}
                    size="sm"
                    cursor="pointer"
                    name={user.name}
                    // src={user.pic}
                  />
                  <Box>
                    <Text>{user.name}</Text>
                    <Text fontSize="xs">
                      <b>Email : </b>
                      {user.email}
                    </Text>
                  </Box>
                </Box>
              ))
            )}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} colorScheme="blue">
              Create Chat
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GroupChatModal;
