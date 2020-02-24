export const EDIT_INFO = "EDIT_INFO";

export const EDIT_INFO_SUCCESS = "EDIT_INFO_SUCCESS";

export const EDIT_INFO_ERROR = "EDIT_INFO_ERROR";

export const editInfo = (data) => ({
    "type": EDIT_INFO,
    "data": data,
});

export const editInfoSuccess = (info) => ({
    "type": EDIT_INFO_SUCCESS,
    "info": info
});

export const editInfoError = (error) => ({
    "type": EDIT_INFO_ERROR,
    error
});