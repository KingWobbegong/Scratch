import * as types from '../constants/actionTypes';

const initialState = {
  photoArray: [
    {
      file: 'C:UsersCJBgithubScratchclientDBproxyimage.png',
    },
  ],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    // case DO_A_THING:
    //return {...state,
    //changedKey:action.payload
    //      secondChangedKey: ""};
    //
    default:
      return state;
  }
};

export default photoReducer;
