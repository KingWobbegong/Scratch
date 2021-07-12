import React from 'react';


const Picture = props => (
    <div className='pictureHead'>
        <h3> Wanted:</h3>
        <img src={props.filepath} className='endPicture'/>
    </div>
)

export default Picture;