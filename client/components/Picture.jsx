import React from 'react';


const Picture = props => (
    <div className='pictureHead'>
        <h3> Wanted:</h3>
        <img src={props.filepath} className='endPicture'/>
        <h3>Votes: {props.votes}</h3>
    </div>
)

export default Picture;