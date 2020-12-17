import React from 'react'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
function MainMenu() {
    return (
        <div className="main-menu">
            <div className="icon">
                <Link to='/'><MenuIcon /></Link>
            </div>
            <h2>Broaster Chicken</h2>
            <div className="icon">
                <Link to='/rule'><HelpOutlineIcon /></Link>

            </div>

        </div>
    )
}

export default MainMenu
