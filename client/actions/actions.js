//this is when we send out dispatches with the dispatcher
//this is also where we do any sort of async or api calls

import * as types from '../constants/actionTypes';
import * as constants from '../constants/miscConstants';



export const uploadPicture = (photoId) => ({
    type: types.UPLOAD_PICTURE,
    payload: photoId,
}) 

export const getPicture = () => (dispatch) => {
    fetch("/api") //request
    .then(({ data }) => {
        dispatch({type: types.LOAD_PICTURES,
        payload: data,
    });
    })
    .catch(console.error);
}
    
//     dispatch({type: types.GET_PICTURE,});
//     SOMENAMEasyn.getPictuesorwhatevver(); //just a stand in for actuall call
//         .then(response => response.json());
//         .then(data => dispatch({type: LOAD_PICTURES_SUCCESS, data}),
//         error=> dispatch({type: LOAD_PICTURES_ERROR, error: error.message || "error in fecthing though thunk, getpictures()"})
//         )
// };


export const removePicture = (photoId) => ({
    type: types.REMOVE_PICTURE,
    payload: photoId,
})



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