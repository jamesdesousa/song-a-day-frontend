import React, { useState } from "react";
import PostCard from "./PostCard";
function MainContainer({todaySongs}) {

    const postArray = todaySongs.map((postObj) => {
        return (
            <PostCard 
            key={postObj.id}
            postObj={postObj}
            />

        )


    })
    return (
       <ul className='posts ui stackable four column grid'>
           {postArray}
        </ul>

    )
}

export default MainContainer