import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <div>
            <nav>
            <Link to='/'>WikiCountries</Link>
            </nav>
        </div>
    );
}

export default Navbar;