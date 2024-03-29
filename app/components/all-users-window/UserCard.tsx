import React from "react";
import { Avatar, Button, Card, CardBody, CardHeader } from "@nextui-org/react";

type Props = {
  firstName: string;
  lastName: string;
  username: string;
  userImage: string;
};

export default function UserCard({
  firstName,
  lastName,
  username,
  userImage,
}: Props) {
  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar isBordered radius="full" size="md" src={userImage} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {firstName && lastName
                ? `${firstName} ${lastName}`
                : firstName || lastName}
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              {username && `@${username}`}
            </h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <Button className="" color="primary" radius="full" size="sm">
          Button
        </Button>
      </CardBody>
    </Card>
  );
}
