import { userData } from "three/examples/jsm/nodes/Nodes.js";
import Chat from "./Chat";
import { currentUser } from "@clerk/nextjs";

export default function ChatServerWrapper() {
  return (
    <>
      {/* {" "}
      {user?.username && user.imageUrl && (
        <Chat userName={user.username} userImage={user.imageUrl} />
      )} */}
      {/* {user.username && user.imageUrl && (
        <Chat userName={user.username} userImage={user.imageUrl} />
      )} */}
    </>
  );
}
