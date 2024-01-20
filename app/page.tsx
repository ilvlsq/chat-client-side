"use client";
import { NextUIProvider } from "@nextui-org/react";
import ChatContainer from "./components/messages-container/ChatContainer";

export default function Home() {
  return (
    <NextUIProvider>
      <ChatContainer />
    </NextUIProvider>
  );
}
