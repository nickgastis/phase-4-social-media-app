import React from 'react';
import "./styles/Post.css";

function Post({user_id, image, date_posted, like_count, id, content, avatar_url, username}) {
    return (
        <div className="post-card">
            <div className="post-header">
                <img src={avatar_url} alt="User Profile Photo" className="user-profile-photo" />
                <h2 className="user-name">{username}</h2>
            </div>
            <img src={image} alt="Post Image" className="post-image" />
            <div className="post-footer">
                <button class="like-btn">
                    <svg viewBox="0 0 17.503 15.625" height="20.625" width="20.503" xmlns="http://www.w3.org/2000/svg" class="icon">
                        <path transform="translate(0 0)" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" id="Fill"></path>
                    </svg> {like_count}
                </button>
                {/* <button className="comment-btn"><i className="fas fa-comment"></i> Comment</button> */}
                <div className="comments">
                    <h3 className="comments-title">{content}</h3>
                    {/* <div className="comment">
                        <h3 className="comment-author">Jane Smith</h3>
                        <p className="comment-text">This is a great post!</p>
                    </div>
                    <div className="comment">
                        <h3 className="comment-author">Bob Johnson</h3>
                        <p className="comment-text">Thanks for sharing!</p>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Post;