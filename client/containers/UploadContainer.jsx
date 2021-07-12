import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Uplaod from '../components/Upload'
import { bindActionCreators } from 'redux';



const mapStateToProps = ({
    //const mapStateToProps = ({happy}) => ({wantedValues: happy.wantedValues})
    })=>({});

    const mapDispatchToProps = (dispatch) => ({
        uploadFile: (e) => dispatch(actions.uploadFile(e)),
    });
        /*key:value pairs like: 
        doAThing: ()=> dispatch(actions.doAThing()), 
        or ActionToPassDown: ()=>dispatch(actions.ActionToPassDown())
        
        */


const UploadContainer = props => (
    <div className="uploadContainer">
        <div className='uploadComponent'>
            <Uplaod uploadFile={props.uploadFile} />

        </div>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);