import React, { useState } from "react";
function UserPostsCard({post, deletePosts, handleCaptionSubmit, newCaption, setNewCaption}) {
    // console.log(post)
    const [showEditField, setShowEditField] = useState(false)
    
    function handleDelete() {
        deletePosts(post.id)
    }
    function updateCaption(event) {
        setNewCaption(event.target.value)
        
        console.log(event)
    }

    function handlePostId() {
        handleCaptionSubmit(newCaption, post.id)
        post.caption = newCaption
    }
    return (
      
        <li className = "ui card userPost">
          <h4>{`${post.user.name}'s SOTD:`}</h4>
          <p>{post.song.name}</p>
          <p>{post.song.artist}</p>
          <p>{post.caption}</p>
          <button onClick={() => setShowEditField(!showEditField)}> Edit Caption</button>
          { showEditField ? (
              <div>
                <input
                type="text"
                id="search"
                placeholder="New Caption..."
                onChange={updateCaption}
                value= {newCaption}
                />
                <button onClick={handlePostId}> Submit</button>

              </div>
          ) : (
              null
          )



          }
         <iframe src= {`https://open.spotify.com/embed/track/${post.song.track_id}`} width="290" height="85" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
         <button onClick={handleDelete} > Delete </button>
        </li>
       
    )
}

export default UserPostsCard