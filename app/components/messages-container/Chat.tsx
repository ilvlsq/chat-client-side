"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ScrollShadow, Textarea } from "@nextui-org/react";
import { useState } from "react";
import Message from "./Message";
import SendButton from "./SendButton";

type Message = { currentMessage: string; userName: string };
type Props = { userName: string; userImage: string };

export default function Chat({ userName, userImage }: Props) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = () => {
    if (currentMessage.length > 0) {
      const newMessage: Message = { currentMessage, userName };
      setMessages([...messages, newMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <NextUIProvider>
      <div
        className=" mt-5 min-h-[500px] max-h-[500px] max-w-3xl
        flex flex-col justify-between 
        border-default-300 rounded-md border-2"
      >
        <ScrollShadow hideScrollBar>
          <div className="flex flex-col overflow-auto">
            {messages.map((message: Message, index: number) => (
              <Message
                key={index}
                message={`${message.currentMessage} ${message.userName}`}
                userImage={userImage}
              />
            ))}
          </div>
        </ScrollShadow>
        <div className="grid grid-cols-7 justify-items-center border-t-1 border-default-400">
          <Textarea
            minRows={1}
            variant="underlined"
            placeholder="Message"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            value={currentMessage}
            onValueChange={setCurrentMessage}
          />
          <SendButton addMessage={addMessage} />
        </div>
      </div>
    </NextUIProvider>
  );
}
