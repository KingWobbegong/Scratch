import React from 'react';


const Vote = props => (
    
    <div className='voteComponentHead'>
        <div className='vote'>
        {console.log(props._id)}
        
            <h1>Hello Vote</h1>
            <img src={props.photo} className='endVote'/>
            <button className="upvote" onClick={() => props.addVote(props._id)}>upvote</button>
            <button className='downvote' onClick={()=> props.downVote()}>downvote</button>
        </div>
    </div>
)


export default Vote;