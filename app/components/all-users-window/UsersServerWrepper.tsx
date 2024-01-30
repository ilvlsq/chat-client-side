import { clerkClient, currentUser } from "@clerk/nextjs";
import { use } from "react";
import Users from "./Users";

async function getAllUses() {
  const allUsers = await clerkClient.users.getUserList({
    limit: 100,
  });
  return allUsers;
}

export default function UsersServerWrapper() {
  const allUsers = use(getAllUses());
  let userObj = JSON.stringify(allUsers);

  return (
    <>
      <Users allUsers={userObj} />
    </>
  );
}
