import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import SignIn from '../components/SignIn';

const mapStateToProps = ({
    //const mapStateToProps = ({happy}) => ({wantedValues: happy.wantedValues})
    })=>({});
    
    const mapDispatchToProps = dispatch => ({
    /*key:value pairs like: 
    doAThing: ()=> dispatch(actions.doAThing()), 
    or ActionToPassDown: ()=>dispatch(actions.ActionToPassDown())
    
    */
    });

    const SignInContainer = props => (
        <div className='signInContainer'>
            <div className='signInComponent'>
                <SignIn/>
            </div>
        </div>
    )
  

    export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);