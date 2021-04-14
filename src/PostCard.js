import React, { useState } from "react";
function PostCard({postObj}) {
    console.log(postObj)
    return (
       <div>
           <li className = "ui fluid card onePost">
            <h4>{`${postObj.user.name}'s SOTD:`}</h4>
            <p>{postObj.song.name}</p>
            <p>{postObj.song.artist}</p>
           <iframe src= {`https://open.spotify.com/embed/track/${postObj.song.track_id}`} width="300" height="85" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 



           </li>
       </div>
    )
}

export default PostCard