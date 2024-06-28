import React from 'react'
import "../../styles/header.css"
import SearchIcon from '@mui/icons-material/Search'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';

function Header({userPhoto}) {
  return (
    <div className='header'>

      <div className='header__logo'>
        <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/768px-Google_Drive_icon_%282020%29.svg.png?20221103153031" alt = "google_drive_logo"/>
        <span>Drive</span>
      </div>

      <div className='header__searchContainer'>
        <div className="header__searchBar">
          <SearchIcon/>
          <input type="text" placeholder='Search in Drive' />
          <ExpandMoreIcon/>
        </div>
      </div>

      <div className='header__icons'>
        <span>
          <span>
            <HelpOutlineIcon/>
            <SettingsIcon/>
          </span>
          <AppsIcon/>
        </span>
          <img src={userPhoto} alt="user-photo" />
      </div>
    </div>
  )
}

export default Header
