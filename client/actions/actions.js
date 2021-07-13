//this is when we send out dispatches with the dispatcher
//this is also where we do any sort of async or api calls

import * as types from '../constants/actionTypes';
import * as constants from '../constants/miscConstants';

export const uploadPicture = (photoId) => (dispatch) =>
  dispatch({
    type: types.UPLOAD_PICTURE,
    payload: photoId,
  });

export const getPicture = () => (dispatch) => {
  fetch('http://localhost:3000/home') //request
    .then((response) => response.json())
    .then((response) => {
      console.log('get picture response', response);
      dispatch({ type: types.LOAD_PICTURES, payload: response });
    })
    .catch(console.error);
};

//     dispatch({type: types.GET_PICTURE,});
//     SOMENAMEasyn.getPictuesorwhatevver(); //just a stand in for actuall call
//         .then(response => response.json());
//         .then(data => dispatch({type: LOAD_PICTURES_SUCCESS, data}),
//         error=> dispatch({type: LOAD_PICTURES_ERROR, error: error.message || "error in fecthing though thunk, getpictures()"})
//         )
// };

export const removePicture = (photoId) => (dispatch) => {
  //send backend server requests to handle removing pictures here

  dispatch({
    type: types.REMOVE_PICTURE,
    payload: photoId,
  });
};

export const addVote = (photoId) => (dispatch) => {
  console.log('photoId from addVote', photoId);
  const apiAddVoteUrl = 'http://localhost:3000/api/vote';
  return fetch(apiAddVoteUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id: photoId, change: 'add' }),
  })
    .then((response) => response.json())
    .then(() => {
      dispatch({
        type: types.ADD_VOTE,
        payload: photoId,
      });
    })
    .catch((err) =>
      console.log(
        "whoops, backend didn't respond correctly from addVote API call! \n returned the following error:",
        err
      )
    );
};

export const downVote = () => (dispatch) => {
  dispatch({
    type: types.DOWN_VOTE,
  });
};

export const uploadFile = (e) => {
  const filename = e.target.value;
  const formData = new FormData();
  //let resFilePath;
  console.log(e);
  formData.append(filename, e.target.files[0]);
  return (dispatch) => {
    return (
      fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.text())
        .then((response) => {
          //this disptach puts picture into state;
          // dispatch({ type: types.UPLOAD_PICTURE, payload: response });
          /*
        NOTE:
        response has now been processed and is a string that is equal to the new
        filepath of the file you just uploaded to the server. So, you know,
        shove it into state or something? Add it to the array of filepaths we have?
        Send it to the database? I have faith, you'll kick ass
        */
          let resFilePath = response;
          console.log(resFilePath);
          console.log('resFilePath', resFilePath);

          console.log('this is gonna be your filepath: ', response);

          fetch('http://localhost:3000/api/upload/save', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },

            body: JSON.stringify({ filepath: response }),
          })
            .then((response) => response.json())
            .then((response) => {
              console.log('response from savefiletodb', response);
              // dispatch({ type: types.LOAD_PICTURES });
            })
            .catch((err) => console.log('error from savefiletodb', err));

          // saveFileToDB(`${response}`);
        })
        // .then(saveFileToDB(resFilePath))
        // .then((resFilePath) => dispatch({ type: types.UPLOAD_PICTURE, payload: resFilePath }))

        .catch((err) => console.log('whoops: ', err))
    );
  };
};

export const saveFileToDB = (resFilePath) => {
  console.log(resFilePath);
  return fetch('http://localhost:3000/api/upload/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain',
    },

    body: { filepath: resFilePath },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log('response from savefiletodb', response);
    })
    .catch((err) => console.log('error from savefiletodb', err));
};

/*
export const doAThing = (arguments) => (dispatch) => {
    anySortOfAsyncServerRequestThing(arguments)
    .then(response => {
    dispatch({
            type: types.DO_A_THING,
            payload: response
        });
    }
)


// export const func = (dispatch) => {
//     dispatch({
//     type: types.sdfsdfs
//     payload:
//     })
// }

*/
