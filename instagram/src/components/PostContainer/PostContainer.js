import React from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import Comments from './../CommentSection/Comments';
import PostHeader from './PostHeader';
import PostContent from './PostContent';

const PostContainer = props => {
    return (
        <div>

             {props.data.map(item => {
                return <div className='container'><PostHeader className='header' key={Math.random()}  user={item.username} thumbnail={item.thumbnailUrl} />
                    <PostContent className='content' key={Math.random()} image={item.imageUrl} likes={item.likes} likePost={props.likePost}/>
                    <Comments className='comment' key={Math.random()}  comments={item.comments} commentHandler={props.commentHandler} addComment={props.addComment}/></div>
               })}

        </div>
    )
}

PostContainer.propTypes = {
    item: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })
}
export default PostContainer;