import React , {useEffect, useState}  from 'react'
import axios from '../axios'
import {API_KEY, imageUrl} from '../constants/Constants'
import './Banner.css'
import Row from '../Row/Row'
import {action, recommended } from '../Row/url'
import { Link} from 'react-router-dom';

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
            setMovie(response.data.results[Math.floor(Math.random()*(20)+0)])
            
            
        })
     },[])
    return (<div>
        <Link to={{pathname:`/contact`}} > <button type="button" class="btn btn-secondary">Contact Us</button> </Link>
        
        <div 
        style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : "" })`} }
        
         className='banner'>
            
            <div className='content' >
                <h4 className='title'>{movie ? movie.title: ''} </h4>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                   
                </div>
                <blockquote class="blockquote">{movie ? movie.overview: ''}</blockquote>
            </div>
        
        </div>
       <Row url={recommended} title="Recommended Movies"/>   
       <Row url={action} title="Action Movies" isSmall/>  </div>

       
    )
}

export default Banner
