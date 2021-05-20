import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/SideDrawer";

const Chatpage = () => {
  return (
    <div style={{ width: "100%" }}>
      <SideDrawer />
      <div
        style={{
          width: "100%",
          height: "91.5vh",
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <MyChats />
        <Chatbox />
      </div>
    </div>
  );
};

export default Chatpage;
