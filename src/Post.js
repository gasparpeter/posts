import React from 'react';


export default (props) => {

    const {post: {title, body}} = props;

    return(
        <div className="post">
            <div className="post-title">{title}</div>
            <div>{body}</div>
        </div>
    )
}