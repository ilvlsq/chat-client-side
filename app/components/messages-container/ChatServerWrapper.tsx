import { use } from "react";
import Chat from "./Chat";
import { currentUser } from "@clerk/nextjs";

async function getCurrentUser() {
  return await currentUser();
}

export default function ChatServerWrapper() {
  const user = use(getCurrentUser());

  return (
    <>
      {user?.firstName && (
        <Chat
          userName={user?.username || user.firstName}
          userImage={user?.imageUrl}
        />
      )}
    </>
  );
}
