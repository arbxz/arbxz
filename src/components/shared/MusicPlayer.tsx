"use client";

import { useEffect, useRef, useState } from "react";

import { faSpotify } from "@fortawesome/free-brands-svg-icons/faSpotify";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons/faEllipsis";
import { faForward } from "@fortawesome/free-solid-svg-icons/faForward";
import { faPause } from "@fortawesome/free-solid-svg-icons/faPause";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "./Card";
import WaveBackground from "./WaveBackground";

const tracks = [
  {
    title: "Sleepy Cat",
    src: "https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3",
    author: "Alejandro Magaña (A. M.)",
  },
  {
    title: "Games Worldbeat",
    src: "https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3",
    author: "Bernardo R.",
  },
];

interface MusicPlayerProps {
  text: string;
}

const MusicPlayer = ({ text }: MusicPlayerProps) => {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const formatTime = (time: any) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    if (trackIndex === 0) {
      let lastTrackIndex = tracks.length - 1;
      setTrackIndex(lastTrackIndex);
      setCurrentTrack(tracks[lastTrackIndex]);
    } else {
      setTrackIndex((prev) => prev - 1);
      setCurrentTrack(tracks[trackIndex - 1]);
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    if (audioRef.current)
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
  }, [isPlaying, audioRef]);

  return (
    <Card styles="relative flex flex-col w-full h-full">
      <div className="bg-background flex flex-col lg:flex-row items-center justify-start">
        <div className="relative block h-[250px] sm:h-[170px] w-full lg:w-[200px] bg-music">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="lg:px-8 lg:py-4 px-4 py-2">
          <span className="block text-xl font-semibold mb-2">{text}</span>
          <span className="block text-lg font-light">{currentTrack.title}</span>
          <span className="text-sm">{currentTrack.author}</span>
        </div>
        <div className="hidden lg:flex flex-col items-center justify-center gap-4 text-xl p-4 opacity-80 ml-auto">
          <FontAwesomeIcon className="text-[#1ED760]" icon={faSpotify} />
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      <div className="relative p-4">
        <WaveBackground />
        <div className="flex justify-center items-center lg:px-8 px-4 pt-2 pb-2 gap-8 text-xl opacity-80">
          <FontAwesomeIcon
            onClick={() => {
              handlePrevious();
            }}
            icon={faForward}
            className="rotate-180 cursor-pointer"
          />
          <button type="button" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <FontAwesomeIcon
                icon={faPause}
                className="flex items-center justify-center rounded-full border border-backgeound p-2 w-6 h-6 cursor-pointer"
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlay}
                className="cursor-pointer flex items-center justify-center rounded-full border border-backgeound p-2 w-6 h-6"
              />
            )}
          </button>

          <FontAwesomeIcon
            className="cursor-pointer"
            onClick={() => {
              handleNext();
            }}
            icon={faForward}
          />
        </div>
        <div className="flex px-8 gap-4">
          <div className="relative w-full  py-4">
            <audio src={currentTrack.src} ref={audioRef} />
            <div className="h-[2px] w-full rounded-full overflow-hidden bg-arbxz-accent opacity-50"></div>
            <div className="absolute top-1/2 -translate-y-1/2 h-[2px] w-16 rounded-full overflow-hidden bg-arbxz-accent"></div>
          </div>
          <span className="text-sm">
            {formatTime(audioRef.current?.duration)}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default MusicPlayer;
