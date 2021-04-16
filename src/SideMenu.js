import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function SideMenu() {

    return (
       <div className= 'ui left fixed vertical menu'>
           <br></br>
           <h2 className= 'sideHeader'>A Song A Day</h2>
           <br></br>
           <p>
           <Link to={`/homepage`} > Home </Link>
           </p>
           <br></br>
           <p>
           <Link to={`/new_post`} > Add SOTD </Link>
           </p>
           <br></br>
           <p> 
           <Link to={`/my_posts`} > My Posts </Link>   
           </p>
           <br></br>
           <p>
           <Link to={`/likes`} > Likes </Link>
           </p>
       </div>
    )
}

export default SideMenu