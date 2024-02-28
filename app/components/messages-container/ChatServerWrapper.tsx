import { use } from "react";
import Chat from "./Chat";
import { currentUser } from "@clerk/nextjs";

async function getCurrentUser() {
  return await currentUser();
}

export default function ChatServerWrapper() {
  const currentUser = use(getCurrentUser());

  return (
    <>
      {currentUser && (
        <Chat
          userName={
            currentUser?.firstName ||
            currentUser.lastName ||
            currentUser.username
          }
          userImage={currentUser?.imageUrl}
        />
      )}
    </>
  );
}
