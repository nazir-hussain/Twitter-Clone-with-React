import { ChatBubbleOutlineOutlined, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import "./Post.css"

const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className="post_Avatar">
                <Avatar src={avatar} />
            </div>

            <div className="postBody">
                <div className="post_Header">
                    <div className="post_Headre_Text">
                        <h3>{displayName}{""}
                            <span className='post_Header_spacial'>
                                {verified && <VerifiedUser className="post_badge" />} @ {username}
                            </span>
                        </h3>
                    </div>

                    <div className="post_Header_Discription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />

                <div className="postFooter">
                    <ChatBubbleOutlineOutlined fontSize='small' />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small' />
                    <Publish fontSize='small' />
                </div>
            </div>
        </div>
    );
}
);

export default Post