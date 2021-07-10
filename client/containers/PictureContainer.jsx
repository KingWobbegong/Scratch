import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import PicturesDisplay from '../components/PicturesDisplay'

const mapStateToProps = ({
    //const mapStateToProps = ({happy}) => ({wantedValues: happy.wantedValues})
    })=>({});

const mapDispatchToProps = dispatch => ({
        /*key:value pairs like: 
        doAThing: ()=> dispatch(actions.doAThing()), 
        or ActionToPassDown: ()=>dispatch(actions.ActionToPassDown())
        
        */
});

const PictureContainer = props => (
    // return (
    <div className='pictureContainer'>
        <div className='picturesDisplay'>
        <PicturesDisplay/>

        </div>
    </div>
    )

        
export default PictureContainer;