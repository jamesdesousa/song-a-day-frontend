import React, { useState } from "react";
function LikesPostCard({likedPost, deleteLikes}) {
    // console.log(likesArray)    

    function handleDelete() {
        console.log(likedPost)
        deleteLikes(likedPost.id)
    }

    return (
      
        <li className = "ui card userPost">
          <h4>{`${likedPost.user.name}'s SOTD:`}</h4>
          <p>{likedPost.song.name}</p>
          <p>{likedPost.song.artist}</p>
         <iframe src= {`https://open.spotify.com/embed/track/${likedPost.song.track_id}`} width="290" height="85" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
         <button onClick={handleDelete}>Unlike</button>
        </li>
       
    )
}

export default LikesPostCard