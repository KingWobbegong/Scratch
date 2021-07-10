import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Uplaod from '../components/Upload'


const mapStateToProps = ({
    //const mapStateToProps = ({happy}) => ({wantedValues: happy.wantedValues})
    })=>({});

    const mapDispatchToProps = dispatch => ({
        /*key:value pairs like: 
        doAThing: ()=> dispatch(actions.doAThing()), 
        or ActionToPassDown: ()=>dispatch(actions.ActionToPassDown())
        
        */
});

const UploadContainer = props => (
    <div className="uploadContainer">
        <div className='uploadComponent'>
            <Uplaod/>

        </div>
    </div>
)

export default UploadContainer;