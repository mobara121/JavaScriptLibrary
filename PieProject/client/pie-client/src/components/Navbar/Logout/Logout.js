import React from 'react';
import './Logout.css';
import logOutPic from '../../../assets/power-buttons.png'

const Logout = (props) => {
    return(
        <div>
            <img id="Logout" className='logout' src={logOutPic} alt="power-button"></img>
        </div>
    )
}

export default Logout;