export const GET_IMAGES = "GET_IMAGES";
export const GET_IMAGES_SUCCESS = "GET_IMAGES_SUCCESS";
export const GET_IMAGES_ERROR = "GET_IMAGES_ERROR";
export const SEND_IMAGES = "SEND_IMAGES";
export const SEND_IMAGES_ERROR = "SEND_IMAGES_ERROR";
export const SEND_IMAGES_SUCCESS = "SEND_IMAGES_SUCCESS";
export const DEL_IMAGES = "DEL_IMAGES";
export const DEL_IMAGES_SUCCESS = "DEL_IMAGES_SUCCESS";
export const DEL_IMAGES_ERROR = "DEL_IMAGES_ERROR";
export const SET_PROFILE_PIC = 'SET_PROFILE_PIC';
export const SET_PROFILE_PIC_SUCCESS = 'SET_PROFILE_PIC_SUCCESS';
export const SET_PROFILE_PIC_ERROR = 'SET_PROFILE_PIC_ERROR';
export const getImages= (user_id) => ({
    "type": GET_IMAGES,
    user_id
});
export const getImagesSuccess= (images) => ({
    "type": GET_IMAGES_SUCCESS,
    images
});
export const getImagesError= (err) => ({
    "type": GET_IMAGES_ERROR,
    err
});

export const sendImages= (data) => ({
    "type": SEND_IMAGES,
    data,
});
export const sendImagesError= (err) => ({
    "type": SEND_IMAGES_ERROR,
    err
});
export const sendImagesSuccess= () => ({
    "type": SEND_IMAGES_SUCCESS,
});
export const delImages= (img) => ({
    "type": DEL_IMAGES,
    img
});
export const delImagesError= (err) => ({
    "type": DEL_IMAGES_ERROR,
    err
});
export const delImagesSuccess= (images) => ({
    "type": DEL_IMAGES_SUCCESS,
    images
});
export const setProfilePic= (imgId,path) => ({
    "type": SET_PROFILE_PIC,
    imgId,path
});
export const setProfilePicSuccess= (images) => ({
    "type": SET_PROFILE_PIC_SUCCESS,
    images
});
export const setProfilePicError= (err) => ({
    "type": SET_PROFILE_PIC_ERROR,
    err
});