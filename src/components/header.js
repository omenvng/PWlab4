import React from 'react';
import { NavLink } from 'react-router-dom';
import Audio from './musicplayer';


function Header() {
    localStorage.clear();
    let user = JSON.parse(localStorage.getItem('user-info'))
    return (
        <div className="header">
            <Audio />
            {
                localStorage.getItem('user-info') ?
                    <> <NavLink className="nav-link" to="/main">Main</NavLink> </> :<>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/SignUp.png" class="image1"></img>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png" class="image3"></img>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png" class="image3"></img>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1200px-HD_transparent_picture.png" class="image3"></img>
                        <NavLink className="nav-link" to="/login">.</NavLink></>} 
            {
                localStorage.getItem('user-info') ?
                    <>
                        <NavLink className="nav-link" to="/main"> {user.name} {user.surname}</NavLink> </>: null
            }  
        </div>
    )

}

export default Header;