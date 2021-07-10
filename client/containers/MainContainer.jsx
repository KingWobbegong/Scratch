import React from 'react';
import { connect } from 'react-redux';
import HelloWorld from '../components/HelloWorld.jsx'
import * as actions from '../actions/actions';

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
        <HelloWorld />
      </div>
    </div>
  );

  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);