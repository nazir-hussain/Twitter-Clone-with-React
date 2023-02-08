import React from 'react'
import './Widgets.css';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed"
import Search from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets_input">
            <Search className='widgets_search_icon' />
            <input type="text" placeholder='Search Twitter'/>
        </div>

        <div className="widgets_widgets_container">
            <h2>what's happening</h2>
            <TwitterTweetEmbed tweetId={'858551177860055040'} />

            <TwitterTimelineEmbed sourceType='profile' screenName='asyrafhussin4' options={{height: 400}} />

            <TwitterShareButton url='https://facebook.com/cleverprogrammer'           options={{ text: "#reactjs is awesome", via: "cleverqazi" }} />

        </div>
    </div>
  )
}

export default Widgets;