import React, { useState } from "react";
import PlaylistOfTheDay from "./PlaylistOfTheDay";
function PlaylistContainer({todaysPlaylist}) {

    return (
       <div>
           <h2 className= 'playlist'> Playlist of the Day </h2>
           <PlaylistOfTheDay  todaysPlaylist={todaysPlaylist}/>
       </div>
    )
}

export default PlaylistContainer