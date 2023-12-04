import Image from "next/image";

import pokemonGif from "../../../../public/images/bgProps/pokemon.gif";
import GameboySVG from "../svg/Gameboy";

const ArtDeck = () => {
  //TODO SHOW ARTWORKS IN MASONRY
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

      <GameboySVG color="#D53831" colorShade="#1E1F29" />
    </div>
  );
};

export default ArtDeck;
