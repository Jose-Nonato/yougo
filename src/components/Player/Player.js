import { useState, useRef, useEffect } from "react";

import { Container } from "./styles";
import { tracks } from "../../data/tracks.js";

import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
} from "react-icons/io5";

import { BsMusicNoteBeamed } from "react-icons/bs";

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef }) => {

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return(
        <div>
            <audio
                src={currentTrack.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
            />
            <div className="audio-info">
                <div className="audio-image">
                {currentTrack.thumbnail ? (
                    <img src={currentTrack.thumbnail} alt="audio avatar" />
                ) : (
                    <div className="icon-wrapper">
                    <span className="audio-icon">
                        <BsMusicNoteBeamed />
                    </span>
                    </div>
                )}
                </div>
                <div className="text">
                <p className="title">{currentTrack.title}</p>
                <p>{currentTrack.author}</p>
                </div>
            </div>
        </div>
    );
}

const Controls = ({ audioRef, tracks, trackIndex, setTrackIndex, setCurrentTrack, }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
    }, [isPlaying, audioRef]);

    const skipForward = () => {
        audioRef.current.currentTime += 15;
    };

    const skipBackward = () => {
        audioRef.current.currentTime -= 15;
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
    };

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
          setTrackIndex(0);
          setCurrentTrack(tracks[0]);
        } else {
          setTrackIndex((prev) => prev + 1);
          setCurrentTrack(tracks[trackIndex + 1]);
        }
    };

    return(
        <div className="controls-wrapper">
            <div className="controls">
                <button onClick={handlePrevious} style={{backgroundColor: "#606060"}}>
                    <IoPlaySkipBackSharp />
                </button>
                <button onClick={skipBackward} style={{backgroundColor: "#606060"}}>
                <IoPlayBackSharp />
                </button>

                <button onClick={togglePlayPause} style={{backgroundColor: "#26CC4C"}}>
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>
                <button onClick={skipForward} style={{backgroundColor: "#606060"}}>
                    <IoPlayForwardSharp />
                </button>
                <button onClick={handleNext} style={{backgroundColor: "#606060"}}>
                    <IoPlaySkipForwardSharp />
                </button>
            </div>
        </div>
    );
}

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {

    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    };

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
      };

    return(
        <div className="progress">
            <span className="time current">{formatTime(timeProgress)}</span>
            <input
                type="range"
                ref={progressBarRef}
                defaultValue="0"
                onChange={handleProgressChange}
            />
            <span className="time">{formatTime(duration)}</span>
        </div>
    );
}

export default function Player() {
    const [trackIndex, setTrackIndex] = useState(0);
    
    // eslint-disable-next-line
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    
    // eslint-disable-next-line
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef();
    const progressBarRef = useRef();

    return(
        <Container>
            <div className="inner">
                <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} setDuration={setDuration} progressBarRef={progressBarRef} />
                <Controls audioRef={audioRef} tracks={tracks} trackIndex={trackIndex} setTrackIndex={setTrackIndex} setCurrentTrack={setCurrentTrack} />
                <ProgressBar progressBarRef={progressBarRef} audioRef={audioRef} timeProgress={timeProgress} duration={duration} />
            </div>
        </Container>
    );
}