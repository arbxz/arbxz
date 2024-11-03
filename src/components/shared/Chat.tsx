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
    <div className="flex items-center justify-start gap-4 py-2 px-4 rounded-xl shadow-sm cursor-pointer duration-300 transition-all bg-background hover:bg-background-secondary hover:translate-x-1">
      <div className="relative">
        <Image
          className="rounded-full shadow"
          src={"/arbaaz-picture.webp"}
          width={50}
          height={50}
          alt="user image"
        />
        <span className="absolute top-0 -left-2 h-6 w-6 flex items-center justify-center text-center text-white bg-form-active text-xs rounded-full">
          25
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-sm">{message}</span>
      </div>
      <span className="text-sm font-light self-end ml-auto">{time}</span>
    </div>
  );
};

export default Chat;
