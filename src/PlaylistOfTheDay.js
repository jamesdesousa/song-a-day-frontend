import React, { useState } from "react";
function PlaylistOfTheDay({todaysPlaylist}) {
    return (
       <div className='dailyPlaylist'>
           { !!todaysPlaylist && 
            <iframe src= {`https://open.spotify.com/embed/playlist/${todaysPlaylist}`} width="300" height="900" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
           }
           
       </div>
    )
}

export default PlaylistOfTheDay