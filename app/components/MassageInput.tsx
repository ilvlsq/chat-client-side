import { Textarea } from "@nextui-org/react";
import SendButton from "./SendButtong";

export default function MessageInput() {
  return (
    <div className="grid grid-cols-7 justify-items-center border-t-1 border-default-400">
      <Textarea
        minRows={1}
        variant="underlined"
        placeholder="Message"
        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
      />
      <SendButton />
    </div>
  );
}
