import { Avatar } from "@nextui-org/react";

type Props = {
  message: string;
  SenderName: string;
  userImage: string;
  currentUser: string;
};

export default function Message({
  message,
  SenderName,
  userImage,
  currentUser,
}: Props) {
  const isInterlocutor = SenderName !== currentUser;

  const currentUserGradient =
    "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900";
  const InterlocutorGradient = "bg-gradient-to-r from-slate-500 to-slate-800";
  const InterlocutorAvatar =
    "https://blogs.perficient.com/files/openai-avatar-600x400.png";

  return (
    <div className="flex flex-row my-2">
      <Avatar
        className="mt-3 ml-2 mr--1"
        isBordered
        size="sm"
        color="success"
        src={isInterlocutor ? InterlocutorAvatar : userImage}
      />
      <div
        className={`self-start max-w-[600px] py-3 px-4 mt-3 ml-4 border-0.5
        ${isInterlocutor ? InterlocutorGradient : currentUserGradient}
        rounded-lg
        overflow-auto`}
      >
        {message}
      </div>
    </div>
  );
}
