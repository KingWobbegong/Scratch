import * as types from '../constants/actionTypes';

//photoArray structure [{_id : num, filepath: string, vote_count: int}]
const initialState = {
  photoArray: [],
};

const photoReducer = (state = initialState, action) => {
  let newState;
  let newPhotoArray = [];
  switch (action.type) {
    // case DO_A_THING:
    //return {...state,
    //changedKey:action.payload
    //      secondChangedKey: ""};
    //

    //this was for updating state from uploaded picture,
    // changed apprach to save to SQL then get state from SQL database
    // case types.UPLOAD_PICTURE /* 'photoAdded' */:
    //   console.log(action.payload);
    //   if (state.photoArray.length > photoId) photoId = state.photoArray.length + 1;
    //   return {
    //     ...state,
    //     photoArray: state.photoArray.concat({ id: photoId++, filepath: action.payload }),
    //   };

    case types.REMOVE_PICTURE /*'photoRemoved'*/:
      if (state.photoArray[action.payload.photoId]) {
        const photoId = action.payload.photoId;
        newState = { ...state };
        newState.filer((photo) => !photo.id !== photoId);
      }
      return {
        ...newState,
      };

    // return state.filter(photo => photo.id !== action.payload.id)

    // case types.GET_PICTURE: /*for getting picture from SQL*/
    case types.LOAD_PICTURES:
      return {
        ...state,
        photoArray: action.payload.rows,
      };

    default:
      return state;
  }
};

export default photoReducer;
