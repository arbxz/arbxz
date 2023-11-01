import GameboySVG from "../svg/Gameboy";

const GraphicSection = () => {
  return (
    <div className="flex items-center h-screen w-full py-5">
      <div className="relative flex md:h-4/5 h-full w-auto mx-auto">
        <GameboySVG color="#4B4D52" colorShade="#333333" />
      </div>
    </div>
  );
};

export default GraphicSection;
