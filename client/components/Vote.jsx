import React from 'react';


const Vote = props => (
    <div className='voteComponentHead'>
        <div className='vote'>
            <h1>Hello Vote</h1>
            <img src={props.photo} className='endVote'/>
            <button className="upvote">upvote</button>
            <button className='downvote' onClick={}>downvote</button>
        </div>
    </div>
)


export default Vote;