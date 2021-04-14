import React, { useState } from "react";
function NewPostSongs({songObj, pickedSong, setPickedSong, setChosenSong, handleSubmit}) {
    
    function setSong(key) {
        setPickedSong(key)
        console.log(pickedSong)
        setChosenSong(true)
    }
    
    return (
       <div>
           { pickedSong!== '' ? (
               null
           ) : (
            <li className = "searches ui  card" value={songObj.id} >
            <p onClick={() => setSong({track_id: songObj.id, name: songObj.name, artist: songObj.artists[0].name})}>{songObj.name}</p>
            <p>{songObj.artists[0].name}</p>
            {/* <button onClick={setPickedSong(songObj.name)}>Pick Song</button> */}
           </li>
           )
           }
           
       </div>
    )
}

export default NewPostSongs