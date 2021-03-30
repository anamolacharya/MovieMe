<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import "../css/Nav.css";


function Nav () {

    const [show, handleShow] = useState(false);
    //This useEffect helps to make the dark background in Netflix when it is scrolled down
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100 ){
                handleShow(true);
            }else handleShow(false);
        });
        return()=>{
            window.removeEventListener("scroll");
        };
        
    }, []);

return(
<div className = {`nav ${show && "nav_black"}`}>
    <img className = "nav_logo"
       src = "https://user-images.githubusercontent.com/55467685/112024996-bbaffb00-8b02-11eb-8b90-163b83464486.png"
       //src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt = "Netfilx Logo"
    />

    <img className = "nav_avatar"
    src = "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
    alt = "Netflix Avatar"
    
    />

</div>
)
}
=======
import React, { useState, useEffect } from 'react';
import "../css/Nav.css";


function Nav () {

    const [show, handleShow] = useState(false);
    //This useEffect helps to make the dark background in Netflix when it is scrolled down
    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100 ){
                handleShow(true);
            }else handleShow(false);
        });
        return()=>{
            window.removeEventListener("scroll");
        };
        
    }, []);

return(
<div className = {`nav ${show && "nav_black"}`}>
    <img className = "nav_logo"
       src = "https://user-images.githubusercontent.com/55467685/112024996-bbaffb00-8b02-11eb-8b90-163b83464486.png"
       //src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt = "Netfilx Logo"
    />

    <img className = "nav_avatar"
    src = "https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
    alt = "Netflix Avatar"
    
    />

</div>
)
}
>>>>>>> Updated files
export default Nav;