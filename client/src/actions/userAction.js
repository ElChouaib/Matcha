export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const GET_USERS = "GET_USERS";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";
export const BLOCK_USER = "BLOCK_USER";
export const DEBLOCK_USER = "DEBLOCK_USER";
export const DELETE_USER = "DELETE_USER";
export const DELETE_BLOCK= "DELETE_BLOCK";
export const DELETE_LIKE= "DELETE_LIKE";
export const LIKE_USER = "LIKE_USER";
export const DISLIKE_USER = "DISLIKE_USER";
export const REPORT_USER = "REPORT_USER";
export const VIEW_PROFILE_USER = "VIEW_PROFILE_USER";
export const GET_BLOCK_USER = "GET_BLOCK_USER";
export const GET_BLOCK_USER_SUCCESS = "GET_BLOCK_USER_SUCCESS";
export const GET_LIKE_USER = "GET_LIKE_USER";
export const GET_LIKE_USER_SUCCESS = "GET_LIKE_USER_SUCCESS";

export const updateUserSuccess = (data) => ({
    "type":  UPDATE_USER_SUCCESS,
    data
});

export const getUsers= (filtre) => ({
    "type":  GET_USERS,
    filtre
});
export const getUsersSuccess= (data) => ({
    "type":  GET_USERS_SUCCESS,
    data
});

export const getUsersError= (err) => ({
    "type":  GET_USERS_ERROR,
    err
});
export const blockUser= (blocked_user_id) => ({
    "type":  BLOCK_USER,
    blocked_user_id
});
export const deblockUser= (deblocked_user_id) => ({
    "type":  DEBLOCK_USER,
    deblocked_user_id
});
export const getBlockUser= () => ({
    "type":  GET_BLOCK_USER,
});
export const getBlockUserSuccess= (data) => ({
    "type":  GET_BLOCK_USER_SUCCESS,
    data
});
export const likeUser= (liked_user_id) => ({
    "type":  LIKE_USER,
  liked_user_id
});
export const dislikeUser= (dislike_user_id) => ({
    "type":  DISLIKE_USER,
    dislike_user_id
});
export const getLikeUser= () => ({
    "type":  GET_LIKE_USER,
});
export const getLikeUserSuccess= (data) => ({
    "type":  GET_LIKE_USER_SUCCESS,
    data
});

export const deleteLike= (id) => ({
    "type":  DELETE_LIKE,
    id : id
});
export const deleteBlock= (id) => ({
    "type":  DELETE_BLOCK,
    id : id
});
export const deleteUser= (id) => ({
    "type":  DELETE_USER,
    id: id,
});

export const reportUser= (reported_user_id) => ({
    "type":  REPORT_USER,
  reported_user_id
});

export const viewProfileUser= (viewed_user_id) => ({
    "type":  VIEW_PROFILE_USER,
    viewed_user_id
});


