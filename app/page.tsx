"use client";
import { NextUIProvider } from "@nextui-org/react";
import MessageInput from "./components/MassageInput";
import Massages from "./components/Massages";

export default function Home() {
  return (
    <NextUIProvider>
      <>
        <div className="mx-auto ml-28 mt-5 min-h-[500px] max-h-[500px] max-w-3xl flex flex-col justify-between border-default-300 rounded-md border-2">
          <Massages />
          <MessageInput />
        </div>
      </>
    </NextUIProvider>
  );
}
