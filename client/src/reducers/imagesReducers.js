import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_ERROR,
    SEND_IMAGES,
    SEND_IMAGES_SUCCESS,
    SEND_IMAGES_ERROR,
    DEL_IMAGES,
    DEL_IMAGES_SUCCESS,
    DEL_IMAGES_ERROR,
    SET_PROFILE_PIC,
    SET_PROFILE_PIC_SUCCESS,
    SET_PROFILE_PIC_ERROR
} from "../actions/imagesAction";

const DEFAULT_STATE =  {images: [], isImages: false, err : ''};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case GET_IMAGES:
            return { images: null, isImages: false};
        case GET_IMAGES_SUCCESS:
            return { images: action.images, isImages: true};
        case GET_IMAGES_ERROR:
            return { err : action.err, isImages: false};
        case SEND_IMAGES:
            return { images: null ,isImages: false};
        case SEND_IMAGES_SUCCESS:
            return { images: action.images, isImages: true};
        case SEND_IMAGES_ERROR:
            return { err: action.err, isImages: false};
        case DEL_IMAGES:
            return { images: null, isImages: false};
        case DEL_IMAGES_SUCCESS:
            return { images: action.images, isImages: true};
        case DEL_IMAGES_ERROR:
            return { err: action.err, isImages: false};
        case SET_PROFILE_PIC:
            return { images: null, isImages: false};
        case SET_PROFILE_PIC_SUCCESS:
            return { images: action.images, isImages: true};
        case SET_PROFILE_PIC_ERROR:
            return { err: action.err, isImages: false};

      default:
        return state;
    }
}