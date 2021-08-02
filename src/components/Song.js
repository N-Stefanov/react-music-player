import React from 'react';

const Song = ({curentSong}) => {
    const {name, cover, artist, autio} = {...curentSong};
    return (
        <div className="song">
            {console.log(curentSong)}
            <div className="song__image">
                <img src={cover} alt="" width="200" />
            </div>

            <div className="song__content">
                <h3>{name}</h3>

                <h4>{artist}</h4>
            </div>
        </div>
    );
}
 
export default Song;