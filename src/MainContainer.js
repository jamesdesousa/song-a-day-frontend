import React, { useState } from "react";
import PostCard from "./PostCard";
function MainContainer({todaySongs, likedPost, setLikedPost, addLike}) {

    const postArray = todaySongs.map((postObj) => {
        return (
            <PostCard 
            key={postObj.id}
            postObj={postObj}
            likedPost={likedPost}
            setLikedPost= {setLikedPost}
            addLike={addLike}
            />

        )


    })
    return (
       <ul className='myPostsContainer'>
           {postArray}
        </ul>

    )
}

export default MainContainer