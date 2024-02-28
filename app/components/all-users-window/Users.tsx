"use client";

import {
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import UsersSearch from "./UsersSearch";
import UserCard from "./UserCard";

export default function Users({ allUsers }: any) {
  allUsers = JSON.parse(allUsers);

  return (
    <div className="flex flex-col">
      <UsersSearch allUsers={allUsers} />
      <div
        className="my-4 py-2 px-1 min-h-[440px] max-h-[440px] min-w-[250px] max-w-[250px]
          flex gap-2 flex-wrap content-start	
          border-default-300 rounded-md border-2
          overflow-auto"
      >
        {allUsers.map((user: { imageUrl: string }, index: number) => (
          <Popover showArrow placement="bottom">
            <PopoverTrigger>
              <Avatar
                key={index}
                src={user.imageUrl}
                className="hover:border-primary-700 border-2 border-transparent ransition-transform"
              />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <UserCard userImage={user.imageUrl} />
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
}
