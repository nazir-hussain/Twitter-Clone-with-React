import React, { useState } from 'react'
import "./TweetBox.css"
import { Avatar, Button } from '@mui/material';
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Nazir Hussain",
            username: "nhussain",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox_img_Input"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button onClick={sendTweet} type="submit" className="tweetBoxBotton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox