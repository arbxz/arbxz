import GameboySVG from "../svg/Gameboy";

const GraphicSection = () => {
  return (
    <div className="flex items-center py-5">
      <div className="relative flex h-full w-[300px] mx-auto">
        <GameboySVG color="#4B4D52" colorShade="#333333" />
      </div>
    </div>
  );
};

export default GraphicSection;
