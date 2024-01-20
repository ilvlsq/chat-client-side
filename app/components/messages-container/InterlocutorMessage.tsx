import { Avatar } from "@nextui-org/react";

export default function InterlocutorMessage({ message }) {
  return (
    <div className="flex flex-row my-2">
      <Avatar
        className="mt-2 ml-2 mr--1"
        isBordered
        size="sm"
        color="success"
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
      />
      <div className=" self-start max-w-[600px] py-3 px-4 mt-3 ml-4 border-0.5 bg-red-700 rounded-lg overflow-auto">
        {message}
      </div>
    </div>
  );
}
