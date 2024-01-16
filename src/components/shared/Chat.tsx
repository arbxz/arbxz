import Image from "next/image";

import userImg from "/public/arbaaz-picture.webp";
const Chat = () => {
  return (
    <div className="flex items-center justify-start gap-4 py-2 px-4 rounded-xl shadow-sm cursor-pointer duration-300 transition-all bg-background hover:bg-background-secondary hover:translate-x-1">
      <div className="relative">
        <Image
          className="rounded-full shadow"
          src={userImg}
          width={50}
          height={50}
          alt="user image"
          placeholder="blur"
          loading="lazy"
        />
        <span className="absolute top-0 -left-2 h-6 w-6 flex items-center justify-center text-center text-white bg-form-active text-xs rounded-full">
          25
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold">Arbaaz Mowlabucus</span>
        <span className="text-sm">Hey can you check out this graph ?</span>
      </div>
      <span className="text-sm font-light self-end ml-auto">19:30</span>
    </div>
  );
};

export default Chat;
