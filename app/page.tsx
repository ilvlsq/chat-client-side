"use client";
import { NextUIProvider } from "@nextui-org/react";
import { UserButton } from "@clerk/nextjs";
import MessageInput from "./components/MassageInput";

export default function Home() {
  return (
    <NextUIProvider>
      <>
        Hello world!
        <UserButton afterSignOutUrl="/" />
        <MessageInput />
      </>
    </NextUIProvider>
  );
}
