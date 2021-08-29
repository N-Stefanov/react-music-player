import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Controls = ({
    currentSong,
    isPlaying,
    setIsPlaying
}) => {
    //Ref
    const audioRef = useRef(null);

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        } else {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="controls">
            <div className="controls__time">
                <p>Start time</p>

                <input type="range" />

                <p>End time</p>
            </div>

            <div className="controls__buttons">
                <button>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                
                <button>
                    <FontAwesomeIcon 
                        icon={faPlay}
                        onClick={playSongHandler}
                    />
                </button>

                <button onClick={playSongHandler}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
}
 
export default Controls;