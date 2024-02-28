import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

export default function UserCard({ userImage }: { userImage: string }) {
  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar isBordered radius="full" size="md" src={userImage} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              NickName
            </h4>
            <h5 className="text-small tracking-tight text-default-500">
              @NickName
            </h5>
          </div>
        </div>
        <Button className="" color="primary" radius="full" size="sm">
          Button
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0">
        <p className="text-small pl-px text-default-500">Body</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">Footer</div>
      </CardFooter>
    </Card>
  );
}
