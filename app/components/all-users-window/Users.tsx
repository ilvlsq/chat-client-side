"use client";

import { Avatar, NextUIProvider } from "@nextui-org/react";
import UsersSearch from "./UsersSearch";

export default function Users({ allUsers }: any) {
  allUsers = JSON.parse(allUsers);
  return (
    <>
      <div
        className="my-4 py-2 px-1 min-h-[500px] max-h-[500px] min-w-[250px] max-w-[250px]
          flex gap-2 flex-row flex-wrap content-start	
          border-default-300 rounded-md border-2"
      >
        <UsersSearch allUsers={allUsers} />
        {allUsers.map(
          (user: { imageUrl: string | undefined }, index: number) => (
            <Avatar key={index} src={user.imageUrl} />
          )
        )}
      </div>
    </>
  );
}
