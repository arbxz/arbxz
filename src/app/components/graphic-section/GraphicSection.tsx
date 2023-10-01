import GameboySVG from "../svg/Gameboy";

const GraphicSection = () => {
  return (
    <div className="flex items-center h-screen w-full py-5">
      <div className="relative flex md:h-4/5 h-full w-auto mx-auto">
        <GameboySVG color="#4B4D52" colorShade="#333333" />
        <button className="absolute w-7 h-7 md:h-5 md:w-5 top-[68%] md:left-[61.5%] left-[61.8%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center md:p-4 p-5 bg-slate-50 text-2xl text-gray-800 rounded-full shadow-sm border overflow-hidden">
          <span>a</span>
        </button>
        <button>b</button>
      </div>
    </div>
  );
};

export default GraphicSection;
