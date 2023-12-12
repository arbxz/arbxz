import Image from "next/image";

import GameboySVG from "../svg/Gameboy";
import pokemonGif from "/public/images/bgProps/pokemon.gif";

const ArtDeck = () => {
  return (
    <div className="relative">
      <div className="w-[240px] h-[183px] overflow-hidden absolute rounded-md top-[32px] left-1/2 -translate-x-1/2">
        <Image
          src={pokemonGif}
          layout="responsive"
          objectFit="cover"
          alt="Pokemon Gif"
          unoptimized={true}
        />
      </div>

      <GameboySVG color={"hsl(15, 85%, 48%);"} colorShade={"#333333"} />
    </div>
  );
};

export default ArtDeck;
