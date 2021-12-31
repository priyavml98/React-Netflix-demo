import React, {useEffect,useState} from 'react'
import axios from '../axios'
import {API_KEY, imageUrl} from '../constants/Constants'
import {} from './url'
import './Row.css'
import { useNavigate } from 'react-router-dom';


function Row(props) {
    const nav= useNavigate()
    

    const [poster, setPoster] = useState([])
   
    useEffect(() => {
        
        axios.get(props.url).then(response=>{
            
            setPoster(response.data.results)
            
        })
    }, [])
    return (
        <div>
        <div className='row'>
            
            <h4 className='text'> {props.title}</h4>
            
            <div className='posters' >
                
                {poster.map((obj)=> 
                <img onClick={(e)=>{ nav('/Page' ,{state:obj})}}  className={props.isSmall ? 'smallposter' : 'poster'} alt='poster' src={`${imageUrl+obj.poster_path}` }  />
                 
                )}
             
            </div>
        </div>
        </div>
    )
}

export default Row
