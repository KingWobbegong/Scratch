import { combineReducers } from 'redux';
//import some other reducers here
import photoReducer from './photoReducer';

const reducers = combineReducers({
  photo: photoReducer,
  //if we have more reducers put them here
});

export default reducers;
