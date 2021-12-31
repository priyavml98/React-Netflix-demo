import React from 'react'
import { useLocation} from 'react-router-dom';
import { imageUrl} from '../constants/Constants'
import Hb from './Hb';
import './Page.css'


function Page() {
    const  obj  = useLocation();
    console.log(obj)
  
    return (
        <div>
            <br></br>
            <Hb/>
             
            <img src={`${imageUrl+obj.state.backdrop_path}`} className='star' ></img> 
            <br></br>
            <blockquote class="h">
            <h1 className='h'> {obj.state.name? obj.state.name:obj.state.title}</h1>
            <p><em>Aired On :{obj.state.first_air_date}</em></p>
            <p><em>Rating  :{obj.state.vote_average}</em></p>


  <p>{obj.state.overview}</p>
</blockquote>
</div>
            
        
    )
}

export default Page
