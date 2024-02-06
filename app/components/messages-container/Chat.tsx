"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ScrollShadow, Textarea, Button } from "@nextui-org/react";
import { useState } from "react";
import Message from "./Message";

type Message = { currentMessage: string; userName: string; role?: string };
type Props = { userName: string; userImage: string };

export default function Chat({ userName, userImage }: Props) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setLoading] = useState(false);
  var role = "user";

  function addMessage() {
    if (currentMessage.length > 0) {
      setCurrentMessage("");
      setLoading(true);

      const newMessage: Message = { currentMessage, userName, role };
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      requestToLLM([...messages, newMessage]);
    }
  }

  async function requestToLLM(messages: Message[]) {
    const request = await fetch("http://localhost:5000/api", {
      method: "POST",
      body: JSON.stringify({ messages }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (request.ok) {
      const data = await request.json();
      const newMessageFromLLM: Message = {
        currentMessage: data,
        userName: "AI",
        role: "assistant",
      };

      setMessages((prevMessages) => [...prevMessages, newMessageFromLLM]);
      setLoading(false);
    }
  }

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
                message={message.currentMessage}
                SenderName={message.userName}
                userImage={userImage}
                currentUser={userName}
              />
            ))}
          </div>
        </ScrollShadow>
        <div className="grid grid-cols-7 justify-items-center border-t-1 rounded-md	 border-default-400">
          <Textarea
            minRows={1}
            variant="underlined"
            placeholder="Message"
            className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addMessage();
              }
            }}
            value={currentMessage}
            onValueChange={setCurrentMessage}
            isDisabled={isLoading}
          />
          <Button
            className="max-w-[44px] h-15"
            radius="sm"
            color="secondary"
            variant="ghost"
            size="lg"
            onClick={addMessage}
            isLoading={isLoading}
          >
            {isLoading ? "" : "send"}
          </Button>
        </div>
      </div>
    </NextUIProvider>
  );
}
