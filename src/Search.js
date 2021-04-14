import React, { useState } from "react";

function Search({search, setSearch, songSearch}) {

    function updateSearch(event) {
        setSearch(event.target.value)
        songSearch(event.target.value)
    }

    return (
        <div>
               <div className="searchbar">
                
                <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                onChange={updateSearch}
                value= {search}
                />
                
         
                </div>

        </div>
    )
}

export default Search