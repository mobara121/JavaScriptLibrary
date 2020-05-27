import React from 'react';
import './Navbar.css';
import piePic from '../../assets/Apple_pie.jpg';

import Logout from './Logout/Logout';

const Navbar = (props) => {

    return(
        <div>
            <nav>
                <img id='piePic' src={piePic} alt='pie' />
                <Logout />
            </nav>
        </div>
    )
}

export default Navbar;