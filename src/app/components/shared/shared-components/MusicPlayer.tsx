import { useState } from "react";

import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons/faEllipsis";
import { faForward } from "@fortawesome/free-solid-svg-icons/faForward";
import { faPause } from "@fortawesome/free-solid-svg-icons/faPause";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faRepeat } from "@fortawesome/free-solid-svg-icons/faRepeat";
import { faShuffle } from "@fortawesome/free-solid-svg-icons/faShuffle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="p-4">
      <div className="bg-foreground text-background rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row items-center">
          <div className="h-[250px] md:h-[150px] w-full md:w-[150px] bg-music"></div>
          <div className="px-8 py-4">
            <span className="block text-2xl font-semibold mb-2">
              Wanna put some music on?
            </span>
            <span className="block text-lg font-light"> Games Worldbeat</span>
            <span className="text-sm">by Bernardo R</span>
          </div>
          <div className="hidden md:flex flex-col items-center justify-center gap-4 text-xl p-4 opacity-80 bg-foreground">
            <FontAwesomeIcon icon={faSpotify} />
            <FontAwesomeIcon icon={faEllipsis} />
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className="bg-backgroundSecondary">
          <div className="flex justify-center items-center px-8 pt-4 pb-2  gap-8 text-xl opacity-80">
            <FontAwesomeIcon icon={faShuffle} />
            <FontAwesomeIcon icon={faForward} className="rotate-180" />
            <button onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? (
                <FontAwesomeIcon
                  icon={faPlay}
                  className="flex items-center justify-center rounded-full border border-backgeound p-2 w-6 h-6 cursor-pointer"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPause}
                  className="flex items-center justify-center rounded-full border border-backgeound p-2 w-6 h-6 cursor-pointer"
                />
              )}
            </button>

            <FontAwesomeIcon icon={faForward} />
            <FontAwesomeIcon icon={faRepeat} />
          </div>
          <div className="relative px-8 py-4">
            <div className="h-[2px] w-full rounded-full overflow-hidden bg-accent opacity-50"></div>
            <div className="absolute top-1/2 -translate-y-1/2 left-8 h-[2px] w-16 rounded-full overflow-hidden bg-accent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
