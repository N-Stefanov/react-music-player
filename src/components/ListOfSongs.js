const ListOfSongs = ({songs}) => {
    return (
        <div className="library">
            <h3>Library</h3>
        {
            songs.map((song) => {
                const {name, cover, artist, active} = {...song};

                return (
                    <div className={active === true ? "song-library is-active" : "song-library"} active>
                        <div className="song-library__image" style={{ backgroundImage: `url("${cover}")`}}></div>

                        <div className="song-library__content">
                            <h3>{name}</h3>

                            <h4>{artist}</h4>
                        </div>
                    </div>
                )
            })
        }
        </div>
    );
}
 
export default ListOfSongs;