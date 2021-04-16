import React, { useState } from "react";
function PostCard({postObj, setLikedPost, likedPost, addLike}) {
    console.log(postObj)
    return (
       <div>
           <li className = "ui fluid card onePost">
            <h4>{`${postObj.user.name}'s SOTD:`}</h4>
            <p>{postObj.song.name}</p>
            <p>{postObj.song.artist}</p>
           <iframe src= {`https://open.spotify.com/embed/track/${postObj.song.track_id}`} width="400" height="85" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
           <button onClick={() => addLike(postObj.id)}>Like</button> 



           </li>
       </div>
    )
}

export default PostCard