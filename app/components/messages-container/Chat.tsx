"use client";

import { ScrollShadow, Textarea } from "@nextui-org/react";
import React from "react";
import InterlocutorMessage from "./InterlocutorMessage";
import SendButton from "./SendButton";

export default function Chat() {
  const [value, setValue] = React.useState("");
  console.log(value);
  return (
    <>
      <ScrollShadow hideScrollBar>
        <div className="flex flex-col overflow-auto">
          <InterlocutorMessage message={value} />
          <InterlocutorMessage message={value} />
          <InterlocutorMessage message={value} />
          <InterlocutorMessage message={value} />
          <InterlocutorMessage message={value} />
          <InterlocutorMessage message={value} />
        </div>
      </ScrollShadow>
      <div className="grid grid-cols-7 justify-items-center border-t-1 border-default-400">
        <Textarea
          minRows={1}
          variant="underlined"
          placeholder="Message"
          className="col-span-12 md:col-span-6 mb-6 md:mb-0"
          value={value}
          onValueChange={setValue}
        />
        <SendButton />
      </div>
    </>
  );
}
