import Image from "next/image";

import GameboySVG from "../svg/Gameboy";

const ArtDeck = () => {
  return (
    <div className="relative">
      <GameboySVG color={"hsl(15, 85%, 48%);"} colorShade={"#333333"} />
    </div>
  );
};

export default ArtDeck;
