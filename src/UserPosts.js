import React, { useState } from "react";
import UserPostsCard from "./UserPostsCard";
function UserPosts({todaySongs, currentUser, setTodaySongs}) {
    
    
    function deletePosts(id) {
        fetch(`http://localhost:3000/posts/${id}`, {
          method: "DELETE",
          headers: {"Text-Content" : "application/json"}
        })
        .then(response => response.json())
        .then(setTodaySongs(()=> todaySongs.filter(posts => posts.id !== id )))
      
      }
    
    const myPosts = todaySongs.map((post) => {
        console.log(post)
        if (post.user.id === currentUser) {
          return (
              <UserPostsCard
              key={post.id}
              post={post}
              deletePosts={deletePosts}
              />
          ) 
        }
    })
    // setMyPostsArray(myPosts)
    
    // console.log(myPosts)
    
    return (
       <ul className='myPostsContainer'>
        {myPosts}
       </ul>
    )
}

export default UserPosts