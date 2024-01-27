import { clerkClient } from "@clerk/nextjs";
import { use } from "react";
import { Avatar } from "@nextui-org/react";

async function getAllUses() {
  const usersMatchingTest = await clerkClient.users.getUserList({});
  return usersMatchingTest;
}

export default function UsersServerWrapper() {
  const allUsers = use(getAllUses());

  return (
    <>
      <div
        className="my-4  min-h-[500px] max-h-[500px] min-w-[250px] max-w-[250px]
        flex flex-row flex-wrap
        border-default-300 rounded-md border-2"
      >
        {allUsers.map((user, index) => (
          <Avatar key={index} src={user.imageUrl} />
        ))}
      </div>
    </>
  );
}
