import Image from "next/image";

interface ChatProps {
  name?: string;
  message?: string;
  time?: string;
}

const Chat = ({
  name = "Arbaaz Mowlabucus",
  message = "Hey can you check out this graph ?",
  time = "19:30",
}: ChatProps) => {
  return (
    <div className="glass flex cursor-pointer items-center justify-start gap-4 rounded-xl px-4 py-2 shadow-sm transition-all duration-300 hover:translate-x-1 hover:bg-background-secondary">
      <div className="relative">
        <Image
          className="rounded-full shadow"
          src={"/arbaaz-picture.webp"}
          width={50}
          height={50}
          alt="user image"
        />
        <span className="absolute -left-2 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-arbxz-accent text-center text-xs text-white">
          25
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-sm">{message}</span>
      </div>
      <span className="ml-auto self-end text-sm font-light">{time}</span>
    </div>
  );
};

export default Chat;
