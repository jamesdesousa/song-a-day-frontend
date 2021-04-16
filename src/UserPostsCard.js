import React, { useState } from "react";
function UserPostsCard({post, deletePosts}) {
    console.log(post)

    function handleDelete() {
        deletePosts(post.id)
    }
    return (
      
        <li className = "ui card userPost">
          <h4>{`${post.user.name}'s SOTD:`}</h4>
          <p>{post.song.name}</p>
          <p>{post.song.artist}</p>
         <iframe src= {`https://open.spotify.com/embed/track/${post.song.track_id}`} width="290" height="85" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
         <button onClick={handleDelete} > Delete </button>
        </li>
       
    )
}

export default UserPostsCard