import { Avatar } from "@nextui-org/react";

export default function Message({
  message,
  userImage,
}: {
  message: string;
  userImage: string;
}) {
  return (
    <div className="flex flex-row my-2">
      <Avatar
        className="mt-3 ml-2 mr--1"
        isBordered
        size="sm"
        color="success"
        src={userImage}
      />
      <div
        className="self-start max-w-[600px] py-3 px-4 mt-3 ml-4 border-0.5
        bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900
        rounded-lg
        overflow-auto"
      >
        {message}
      </div>
    </div>
  );
}
