import React, { use } from 'react';

const ShowComment = ({commentFetch}) => {
    const comment = use(commentFetch);
    
    return (
        <div>
            <p>Comment:<br></br> {comment.body}</p>
        </div>
    );
};

export default ShowComment;