import React, { useState, useEffect } from "react";
import LikesPostCard from "./LikesPostCard";

function Likes({todaySongs, currentUser}) {
const [likedPosts, setLikedPosts] = useState([])
const [deleteLikeArray, setDeleteLikeArray] = useState([])
const[likeIdArray, setLikeIdArray] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/likes')
        .then(response => response.json())
        .then(likes => {
          console.log(likes)
          showLikes(likes)
          setDeleteLikeArray(likes)
        })
      }, [])
      console.log(deleteLikeArray)

      function deleteLikes(id) {
        console.log(id)
        const anotherLikeArray = deleteLikeArray.filter(likes => likes.post.id === id)
        setDeleteLikeArray(anotherLikeArray)
        console.log(likeIdArray)
       
        const likeId = likeIdArray[0]
        console.log(likeId.id)
        fetch(`http://localhost:3000/likes/${likeId.id}`, {
          method: "DELETE",
          headers: {"Text-Content" : "application/json"}
        })
        .then(response => response.json())
        .then(setDeleteLikeArray(()=> deleteLikeArray.filter(likes => likes.post.id !== id )))
      
      }
      //also set liked post array as new and improved array after delete
      // likes.key !== id
      // 0==1
      function showLikes(likes) {
        // console.log(likes[0].post.id)
        // console.log(todaySongs[0].id)
        const likedArray = likes.map((like) => {
          for(let i = 0; i<todaySongs.length; i++) {
            if(like.post.id === todaySongs[i].id && like.user.id === currentUser) {
              return (
                <LikesPostCard 
                key={todaySongs[i].id}
                likedPost={todaySongs[i]}
                deleteLikes={deleteLikes}
                />
              )
            }
          }
        })
        setLikedPosts(likedArray)
      }
    return (
       <ul className='likesContainer'>
         {likedPosts}
        </ul>

    )
}

export default Likes