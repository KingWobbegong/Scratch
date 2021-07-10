import React from 'react';


const Picture = props => (
    <div className='pictureHead'>
        <h1> Hello, picutre</h1>
        <img src={props.filepath}/>
        <img src={'https://im.indiatimes.in/content/itimes/photo/2016/Aug/26/1472233327-25-pictures-that-will-instantly-make-you-happy_card.jpg'}/>
    </div>
)

export default Picture;