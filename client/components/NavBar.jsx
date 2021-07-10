import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div>
        <ul id='nav'>
            <li>
                <Link to='/picture'>Home</Link> 
            </li>
            <li>
                <Link to='/upload'>Upload</Link>
                </li>
                <li>
                    <Link to='/vote'>Vote</Link>
                </li>
                <li>
                    <Link to='/signIn'>Signin</Link>
            </li>
        </ul>
    </div>
)

export default NavBar;