import { Button } from "@nextui-org/react";

export default function SendButton({ addMessage }: { addMessage: () => void }) {
  return (
    <Button
      className=" h-15"
      radius="none"
      color="secondary"
      variant="ghost"
      size="lg"
      onClick={addMessage}
    >
      Send
    </Button>
  );
}
