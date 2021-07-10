import React from 'react';


const Picture = props => (
    <div className='pictureHead'>
        <h1> Hello, picutre</h1>
        <img src={props.filepath}/>
    </div>
)

export default Picture;