import React, { useState } from "react";
function PostCard({postObj, setLikedPost, likedPost, addLike}) {
    console.log(postObj)
    return (
       <div>
           <li className = "ui fluid card onePost">
            <h3>{`${postObj.user.name}'s SOTD:`}</h3>
            <b>{postObj.song.name}</b>
            <p>{postObj.song.artist}</p>
            <p>Caption:</p>
            <p>{postObj.caption}</p>
           <iframe src= {`https://open.spotify.com/embed/track/${postObj.song.track_id}`} width="400" height="85" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
           <button onClick={() => addLike(postObj.id)}>Like</button> 



           </li>
       </div>
    )
}

export default PostCard