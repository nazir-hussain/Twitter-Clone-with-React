import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SiderbarOption from './SiderbarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';

function Sidebar() {
  return (
    <div className='sidebar'>
      {/* Twitter Icone */}
      <TwitterIcon className='sidebar_twittericon'/>

      {/* Sidebar Option */}
      <SiderbarOption active Icon={HomeIcon} text="Home" />
      <SiderbarOption Icon={SearchIcon} text="Explore" />
      <SiderbarOption Icon={NotificationsNoneIcon} text="Notificition" />
      <SiderbarOption Icon={MailOutlineIcon} text="Messages" />
      <SiderbarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SiderbarOption Icon={ListAltIcon} text="List" />
      <SiderbarOption Icon={PermIdentityIcon} text="Profile" />
      <SiderbarOption Icon={MoreHorizIcon} text="More" />

      {/* Button --> Tweet */}
      <Button variant="outlined" className="sidebar--tweet" fullWidth>
        Tweet
      </Button>

    </div>
  )
}

export default Sidebar