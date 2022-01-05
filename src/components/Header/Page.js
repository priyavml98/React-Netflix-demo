import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { imageUrl} from '../constants/Constants'

import Header from './Header';
import './Page.css'


function Page() {
    const  obj  = useLocation();
    console.log(obj)
  
    return (
        <div>
            
            <br></br>
            
             <Header element={obj.state.title? obj.state.title:obj.state.name}/>
             
             <img src={`${imageUrl+obj.state.backdrop_path}`} className='star' /> 
            <br></br>
            <blockquote class="h">
            <div>
           <Link to={{pathname:`/`}} >  <button type="button" class="btn btn-secondary">Home</button> </Link>
        </div>
                
            
            <p><em>Aired On :{obj.state.first_air_date}</em></p>
            <p><em>Rating  :{obj.state.vote_average}</em></p>


  <p>{obj.state.overview}</p>
</blockquote>
</div>
            
        
    )
}

export default Page
