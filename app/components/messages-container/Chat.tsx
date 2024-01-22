"use client";

import { ScrollShadow, Textarea } from "@nextui-org/react";
import React from "react";
import Message from "./Message";
import SendButton from "./SendButton";

export default function Chat() {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const addMessage = () => {
    if (message.length > 0) {
      const newMessage = { message, user: "other" };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <>
      <ScrollShadow hideScrollBar>
        <div className="flex flex-col overflow-auto">
          {messages.map((message, index) => (
            <Message
              key={index}
              message={`${message.message} ${message.user}`}
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
          value={message}
          onValueChange={setMessage}
        />
        <SendButton addMessage={addMessage} />
      </div>
    </>
  );
}
