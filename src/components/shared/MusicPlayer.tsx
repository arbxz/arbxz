'use client';

import { useEffect, useRef, useState } from 'react';

import { EllipsisIcon, FastForward, Pause, Play, Plus } from 'lucide-react';

import Card from './Card';
import WaveBackground from './WaveBackground';

const tracks = [
  {
    title: 'Sleepy Cat',
    src: 'https://www.youtube.com/watch?v=fKF2HIjxtNA',
    author: 'Alejandro Magaña (A. M.)',
  },
  {
    title: 'Games Worldbeat',
    src: 'https://www.youtube.com/watch?v=fKF2HIjxtNA',
    author: 'Bernardo R.',
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
    return '00:00';
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
      <div className="flex flex-col items-center justify-start bg-background lg:flex-row">
        <div className="bg-music relative block h-[250px] w-full sm:h-[170px] lg:w-[200px]">
          <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="px-4 py-2 lg:px-8 lg:py-4">
          <span className="mb-2 block text-xl font-semibold">{text}</span>
          <span className="block text-lg font-light">{currentTrack.title}</span>
          <span className="text-sm">{currentTrack.author}</span>
        </div>
        <div className="ml-auto hidden flex-col items-center justify-center gap-4 p-4 text-xl opacity-80 lg:flex">
          <EllipsisIcon />
          <Plus />
        </div>
      </div>
      <div className="relative p-4">
        <WaveBackground />
        <div className="flex items-center justify-center gap-8 px-4 pb-2 pt-2 text-xl opacity-80 lg:px-8">
          <FastForward
            onClick={() => {
              handlePrevious();
            }}
            className="rotate-180 cursor-pointer"
          />
          <button type="button" onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <Pause className="border-backgeound flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border p-2" />
            ) : (
              <Play className="border-backgeound flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border p-2" />
            )}
          </button>

          <FastForward
            className="cursor-pointer"
            onClick={() => {
              handleNext();
            }}
          />
        </div>
        <div className="flex gap-4 px-8">
          <div className="relative w-full py-4">
            <audio src={currentTrack.src} ref={audioRef} />
            <div className="h-[2px] w-full overflow-hidden rounded-full bg-arbxz-accent opacity-50"></div>
            <div className="absolute top-1/2 h-[2px] w-16 -translate-y-1/2 overflow-hidden rounded-full bg-arbxz-accent"></div>
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
