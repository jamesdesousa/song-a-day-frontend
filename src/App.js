import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SpotifyWebApi from 'spotify-web-api-js'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';
import Search from "./Search";
import Logo from "./Logo";
import PlaylistContainer from "./PlaylistContainer";
import MainContainer from "./MainContainer";
import SideMenu from "./SideMenu";
import NewPost from "./NewPost";
import UserPosts from "./UserPosts";
import NewPostSongs from "./NewPostSongs";
import Login from "./Login";
import Likes from "./Likes";
const spotifyApi = new SpotifyWebApi();
//addLike a filter to only show posts for certain user and then in those cards addLike a delete function for my post page
//addLike a like functionality (liked/not liked)
//addLike caption 
//done ! 


function App() {
  console.log(process.env.REACT_APP_SPOTIFY_API_KEY)
  spotifyApi.setAccessToken(process.env.REACT_APP_SPOTIFY_API_KEY)
  
  const [search, setSearch] = useState('')
  const [todaysPlaylist, setTodaysPlaylist] = useState(0)
  const [todaySongs, setTodaySongs] = useState([])
  const [newSong, setNewSong] = useState([])
  const [chosenSong, setChosenSong] = useState(false)
  //new post form states
  const [pickedSong, setPickedSong] = useState('')
  const [genre, setGenre] = useState('0')
  //setting current user 
  const [currentUser, setCurrentUser] = useState(1)
  //setting postID for like 
  const [likedPost, setLikedPost] = useState('')
  //setting restriction for posting 
  const[timer, setTimer] = useState(false)
   
  useEffect(() => {
    spotifyApi.getFeaturedPlaylists().then(
      function (data) {
        console.log('Featured Playlists', data.playlists.items[0]);
        setTodaysPlaylist(data.playlists.items[0].id)
      },
      function (err) {
        console.error(err);
      }
    )
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(posts => {
      console.log(posts)
      setTodaySongs(posts)
    })
  }, [])

  
  
  function handleSubmit() {
    console.log(pickedSong)
    console.log(genre)
    setTimer(!timer)
    countdownTimer()
    setChosenSong(!chosenSong)
    const formData = {
      name: pickedSong.name,
      artist: pickedSong.artist,
      track_id: pickedSong.track_id,
      genre_id: parseInt(genre)
    }
    fetch("http://localhost:3000/songs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
        JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(song => {
        console.log(song)
        handlePost(song)
        
      })
  }
  
  function countdownTimer() {
    setTimeout(() => {setTimer(!timer)}, 10000)
  }

  function handlePost(song) {
    console.log(song)
    const formData = {
      song_id: song.id,
      user_id: 1
    }
    fetch("http://localhost:3000/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
        JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(song => {
        addPost(song)
        
      })
  }

  function addPost(newPost){
    const newPostArray=[...todaySongs, newPost]
    setTodaySongs(newPostArray)
  }


  function songSearch(search) {
    spotifyApi.searchTracks(encodeURI(search))
      .then(
        function(response) {
           console.log(response)
           console.log(response.tracks.items)
           setNewSong(response.tracks.items)
           
      }
    )
  }

  function addLike(likedPost) {
    console.log(likedPost)
    const formData = {
      post_id: likedPost,
      user_id: 1
    }
    fetch("http://localhost:3000/likes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:
        JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(like => {
        console.log(like)
        
      })
  }



 
  console.log(pickedSong)

  return (
    <div className="App">
      {/* <Search search={search} setSearch={setSearch} songSearch={songSearch}/> */}
      <Logo/>
      <SideMenu />
      <Switch>
        <Route exact path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}  />
        </Route>
      <Route exact path="/homepage">
      <PlaylistContainer todaysPlaylist={todaysPlaylist} likedPost={likedPost} setLikedPost={setLikedPost}  />
      <MainContainer todaySongs={todaySongs} addLike={addLike}/>
      
      </Route>
      {/* <Route exact path="/edit">
        <EditUser />
      </Route> */}
      <Route exact path="/new_post">
        <NewPost search={search} setSearch={setSearch} songSearch={songSearch} newSong={newSong} pickedSong={pickedSong} setPickedSong={setPickedSong} genre={genre} setGenre={setGenre} chosenSong={chosenSong} setChosenSong={setChosenSong} handleSubmit={handleSubmit}/>
      </Route>
      <Route exact path='/likes'>
        <Likes todaySongs={todaySongs} currentUser={currentUser} />
      </Route>
      <Route exact path='/posts'/>
      <UserPosts todaySongs={todaySongs} currentUser={currentUser} setTodaySongs={setTodaySongs} />
      <Route path="*">
        <h1>404 not found</h1>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
