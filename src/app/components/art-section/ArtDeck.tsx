import Image from "next/image";
import { useTheme } from "next-themes";

import pokemonGif from "../../../../public/images/bgProps/pokemon.gif";
import GameboySVG from "../svg/Gameboy";

const ArtDeck = () => {
  const { resolvedTheme } = useTheme();

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

      <GameboySVG
        color={resolvedTheme === "dark" ? "#d2c" : "hsl(15, 85%, 48%)"}
        colorShade={resolvedTheme === "dark" ? "#7712dc" : "hsl(15, 90%, 20%)"}
      />
    </div>
  );
};

export default ArtDeck;
