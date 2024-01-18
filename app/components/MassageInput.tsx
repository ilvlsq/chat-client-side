import { Textarea } from "@nextui-org/react";
import SendButton from "./SendButtong";

export default function MessageInput() {
  return (
    <div className="w-full grid grid-cols-12 gap-4">
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
