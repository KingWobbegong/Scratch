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
    console.log(this.props)
    return (

    

    <div className='pictureContainer'>
        <div className='picturesDisplay'>
        {/* <PicturesDisplay/> */}
        
        {console.log("HELLO!")}
        <Picture filepath={this.props.photos[0]}/>
        </div>
    </div>
    )
}
}

        
    export default connect(mapStateToProps, null)(PictureContainer);