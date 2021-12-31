import React from 'react'
import { Link} from 'react-router-dom';

function Hb() {
    return (
        <div>
           <Link to={{pathname:`/`}} >  <button type="button" class="btn btn-secondary">Home</button> </Link>
        </div>
    )
}

export default Hb
