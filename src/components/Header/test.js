import React from 'react'
import './test.css'
import { useLocation , location } from "react-router-dom"
import Hb from './Hb'


function Test() {
  
   
    return (
       
        <div className='container'> <form ><br></br>
            <Hb/>
           
           <h5>For any Queries, Please reach out to abcde@gmail.com </h5>
           <br></br>
           <p> Subscribe to our Newsletter</p>
        <div class="mb-9">
          <label for="exampleInputEmail1" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail11" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </div>
    )
    }
export default Test