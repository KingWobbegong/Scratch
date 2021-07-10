import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/indexReducer';
//import {doAThing} from './actions/actions'; //-- something you want to do to begin with to set store
//remember to import reducers and actions

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

//store.dispatch(doAThing());

export default store;
