import * as types from '../constants/actionTypes';

let photoId = 4;

const initialState = {
  // photoToUpload: {
  //   photoId: photoId,
  //   file: 'file',
  // },
  photoArray: [
    {
      id: 1,
      filepath: './images/kingWobbegong.jpg',
    },
    {
      id: 2,
      filepath: './images/image.jpg',
    },
    {
      id: 3,
      filepath: './images/wobbegong.jpg',
    },
    {
      id: 4,
      filepath: './images/wobbegong1.jpg',
    },
    {
      id: 5,
      filepath: './images/wobbegong2.jpg',
    },
    {
      id: 6,
      filepath: './images/[1]image.png',
    },
  ],
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

    case types.UPLOAD_PICTURE /* 'photoAdded' */:
      console.log(action.payload);
      //newState = { ...state };
      //newState.photoArray.push({ id: ++photoId, filepath: action.payload });
      if (state.photoArray.length > photoId) photoId = state.photoArray.length + 1;

      return {
        ...state,
        photoArray: state.photoArray.concat({ id: photoId++, filepath: action.payload }),
      };

    // return {
    //     ...state, // copy all the photos from the state
    //     {
    //       // increment id
    //       id: ++photoId,
    //       description: action.payload.description,
    //       resolve: false,
    //     },
    //   }
    //   ];

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
      newState = { ...state };
      //newState.photoArray = newPhotoArray;
      //console.log('action.payload', action.payload);
      //console.log('action.payload.rows', action.payload.rows);
      newPhotoArray = action.payload.rows;
      //console.log('newPhoto Array', newPhotoArray);
      newState.photoArray = newPhotoArray;
      //console.log('newState', newState);

      return {
        ...newState,
      };

    default:
      return state;
  }
};

export default photoReducer;
