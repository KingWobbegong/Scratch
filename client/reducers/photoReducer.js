import * as types from '../constants/actionTypes';

const initialState = {
  photoArray: [
    {
      filepath:
        'https://im.indiatimes.in/content/itimes/photo/2016/Aug/26/1472233327-25-pictures-that-will-instantly-make-you-happy_card.jpg',
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
