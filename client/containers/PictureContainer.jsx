import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PicturesDisplay from '../components/PicturesDisplay'
import Picture from '../components/Picture'

const mapStateToProps = state =>  ({  
photos: state.photo.photoArray,    
});
//const mapStateToProps = ({happy}) => ({wantedValues: happy.wantedValues})

const mapDispatchToProps = dispatch => ({
        /*key:value pairs like: 
        doAThing: ()=> dispatch(actions.doAThing()), 
        or ActionToPassDown: ()=>dispatch(actions.ActionToPassDown())
        
        */
});

class PictureContainer extends React.Component {
    constructor(props) {
        super(props);
    }


// const PictureContainer = props => (
    // return (
render() {
    const arr = [];
    
    this.props.photos.forEach((el)=>(arr.push(<Picture filepath={el.filepath}/>)));

    console.log(this.props)
    return (

    <div className='pictureContainer'>
        <div className='picturesDisplay'>
            <h1>Welcome to the Wobbegang</h1>
            {arr}
            {/* <Picture filepath={this.props.photos[0].filepath}/>
            <Picture filepath={this.props.photos[4].filepath}/>
            <Picture filepath={this.props.photos[1].filepath}/>
            <Picture filepath={this.props.photos[3].filepath}/>
            <Picture filepath={this.props.photos[2].filepath}/> */}

        </div>
    </div>
    )
}
}

        
    export default connect(mapStateToProps, null)(PictureContainer);