import React from 'react';

const Song = ({currentSong}) => {
    const {name, cover, artist, audio} = {...currentSong};
    return (
        <div className="song">
            <div className="song__image" style={{ backgroundImage: `url("${cover}")`}}></div>

            <div className="song__content">
                <h2>{name}</h2>

                <h3>{artist}</h3>
            </div>
        </div>
    );
}
 
export default Song;