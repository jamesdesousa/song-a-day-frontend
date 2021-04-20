import React, { useState } from "react";
import NewPostSongs from "./NewPostSongs";
function NewPost({search, setSearch, songSearch, newSong, pickedSong, setPickedSong, genre, setGenre, chosenSong, setChosenSong, handleSubmit, newCaption, setNewCaption}) {

    //only show save song to spotify if user is logged in

    function updateSearch(event) {
        setSearch(event.target.value)
        songSearch(event.target.value)
    }

    function updateCaption(event) {
        setNewCaption(event.target.value)
        
        console.log(event)
    }
    console.log(newSong)
    const listOfSongs = !!newSong && newSong.map((songObj) => {
        return (
            <NewPostSongs 
            key={songObj.id}
            songObj={songObj}
            pickedSong={pickedSong}
            setPickedSong={setPickedSong}
            setChosenSong={setChosenSong}
            handleSubmit={handleSubmit}
            />
        )


    })

    return (
        <div>
                <p className='SOTDheader'>Choose Your Song of The Day:</p>
               <div id=' search'>
                <br></br>
                <input
                type="text"
                id="search"
                placeholder="Search Songs..."
                onChange={updateSearch}
                value= {search}
                />
                </div>
                {search==='' ? (
                    null
                ) : (
                    <ul className='searchList'>
                    {listOfSongs}
                    </ul>
                )
                }   
                     
                
                <div className='chosenSong'>
                {chosenSong ? (
                    <div>
                    <p>{pickedSong.name}</p>
                    <p>{pickedSong.artist}</p>
                    
                    </div>
                ) : (
                    null
                )
                } 

                </div>
                <div className='genre'>
                <p>Add Genre of Your SOTD:</p>
                <br></br>
                <select value={genre} onChange={(e) => setGenre(e.target.value)} id="cuisineList">
                    <option value="0">Choose Genre</option>
                    <option value="1">EDM</option>
                    <option value="2">Pop</option>
                    <option value="3">Rock</option>
                    <option value="4">Hip-Hop</option>
                    
            </select>
            </div>
            <div className='changeCaption'>
                <input
                type="text"
                id="search"
                placeholder="New Caption..."
                onChange={updateCaption}
                value= {newCaption}
                />
                

              </div>

            <button className='fluid ui green button postButton' onClick={() => handleSubmit()}>Create Post</button>

        </div>
    )
}

export default NewPost