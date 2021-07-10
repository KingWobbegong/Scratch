import React from 'react';
import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld.jsx'
import * as actions from '../actions/actions';
import PictureContainer from './PictureContainer'
import UploadContainer from './UploadContainer.jsx';
import VoteContainer from './VoteContainer';
import SignInContainer from './SignInContainer.jsx';
import { Switch, Route } from 'react-router';

const mapStateToProps = ({
//const mapStateToProps = ({happy}) => ({wantedValues: happy.wantedValues})
})=>({});

const mapDispatchToProps = dispatch => ({
/*key:value pairs like: 
doAThing: ()=> dispatch(actions.doAThing()), 
or ActionToPassDown: ()=>dispatch(actions.ActionToPassDown())

*/
});

const MainContainer = props => (

    <div className="container">
      <div className="outerBox">
        
        <Switch>
          <Route exact path='/picture' component={PictureContainer}/>
        </Switch>
        <Switch>
          <Route exact path='/upload' component={UploadContainer}/>
        </Switch>
        <Switch>
          <Route exact path='/vote' component={VoteContainer}/>
        </Switch>
        <Switch>
          <Route exact path='/signIn' component={SignInContainer}/>
        </Switch>

        {/* <HelloWorld /> */}
        {/* <PictureContainer/>
        <UploadContainer/>
        <VoteContainer/> */}


      </div>
    </div>
  );

  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

//app.js holds main container
  //main container holding nav bar switch statments (home container, upload container, vote container, signin container)
      // -Home container - holds picture displayer component and Individual picture compoenets
      // upload container - holds upload display, and upload components 
      // vote container - holds Vote display and photo + upvote, downvote button
      // sign in container - hold sign in stuff