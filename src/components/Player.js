import React, {useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({curentSong}) => {
    //Ref
    const audioRef = useRef(null);

    //Events Jandlers
    const playSongHandler = () => {
        
    }

    return (
        <div className="player">
            <div className="player__time-control">
                <p>Start time</p>

                <input type="range" />

                <p>End time</p>

                <div className="player__controls">
                    <button>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>
                    
                    <button>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>

                    <button onClick={playSongHandler}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>
                </div>

                <audio ref={audioRef} src={curentSong.audio}></audio>
            </div>
        </div>
    );
}
 
export default Player;