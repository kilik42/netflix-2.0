import React from 'react'
import './Nav.css'
function Nav() {
  const [show, handleShow] = useState(false);
  return (
    <div className="nav">
         <div className="nave__contents">
            
         <img 
        className="nav__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1DVWbBabuCdvFAdz0-O1FJVNZIy62aU_Hd7X7O3U3&s" alt="" />
      
      <img
      className="nav__avatar"
       src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
       alt="" />
         </div>
      
    </div>
  )
}

export default Nav
