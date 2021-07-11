import * as types from '../constants/actionTypes';

const initialState = {
  photoArray: [
    {filepath: './images/kingWobbegong.jpg'},
    {filepath:'./images/image.jpg'},
    {filepath: './images/wobbegong.jpg'},
    {filepath: './images/wobbegong1.jpg'},
    {filepath: './images/wobbegong2.jpg'}
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
