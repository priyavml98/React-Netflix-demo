import React from 'react'
import { Link} from 'react-router-dom';
import './Header.css'


function Header(props) {
console.log(props)

    return (
        <div>
               
  <nav class="navbar navbar-dark bgdark">
  <div class="container-fluid">
  
      {props.element?  props.element: 
      <img className='ne' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="" width="100" height="24" class="d-inline-block align-text-top"/>
      }
    
  </div>
</nav>

        </div>
    )
}

export default Header
