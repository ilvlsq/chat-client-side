"use client";

import {
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import UsersSearch from "./UsersSearch";
import UserCard from "./UserCard";

type Props = {
  allUsers: string;
};

type user = {
  firstName: string;
  lastName: string;
  username: string;
  imageUrl: string;
};

export default function Users({ allUsers }: Props) {
  const parsedUsers = JSON.parse(allUsers);

  return (
    <div className="flex flex-col">
      <UsersSearch users={parsedUsers} />
      <div
        className="my-4 py-2 px-1 min-h-[440px] max-h-[440px] min-w-[250px] max-w-[250px]
          flex gap-2 flex-wrap content-start	
          border-default-300 rounded-md border-2
          overflow-auto"
      >
        {parsedUsers.map((user: user, index: number) => (
          <Popover key={index} showArrow placement="bottom">
            <PopoverTrigger>
              <Avatar
                src={user.imageUrl}
                className="hover:border-primary-700 border-2 border-transparent ransition-transform"
              />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <UserCard
                userImage={user.imageUrl}
                firstName={user.firstName}
                lastName={user.lastName}
                username={user.username}
              />
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
}
