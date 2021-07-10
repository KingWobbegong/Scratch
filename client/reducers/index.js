import { combineReducers } from 'redux';
//import some other reducers here
import happyReducer from './happyReducer';


export default combineReducers({

    happy: happyReducer

})

