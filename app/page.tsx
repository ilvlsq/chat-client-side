import ChatServerWrapper from "./components/messages-container/ChatServerWrapper";
import UsersServerWrapper from "./components/all-users-window/UsersServerWrepper";

import InterlocutorInputPlaceHolder from "./components/interlocutor-input/InterlocutorInput(Placeholder)";

export default function Home() {
  return (
    <div className="flex flex-row justify-around ">
      <InterlocutorInputPlaceHolder />
      <ChatServerWrapper />
      <UsersServerWrapper />
    </div>
  );
}
