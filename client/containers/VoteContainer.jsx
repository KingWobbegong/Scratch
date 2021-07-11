import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Vote from '../components/Vote';

const mapStateToProps = ({
    //const mapStateToProps = ({happy}) => ({wantedValues: happy.wantedValues})
    })=>({});
    
    const mapDispatchToProps = dispatch => ({
    /*key:value pairs like: 
    doAThing: ()=> dispatch(actions.doAThing()), 
    or ActionToPassDown: ()=>dispatch(actions.ActionToPassDown())
    
    */
    });

const VoteContainer = props => (
    <div className='voteContainer'>
        <div className='voteComponent'>
            <Vote/>
        </div>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(VoteContainer);