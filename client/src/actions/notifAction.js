export const OPEN_NOTIF = "OPEN_NOTIF";

export const OPEN_NOTIF_SUCCESS = "OPEN_NOTIF_SUCCESS";

export const NEW_NOTIF = "NEW_NOTIF";

export const GET_NOTIF = "GET_NOTIF";

export const GET_NOTIF_SUCCESS = "GET_NOTIF_SUCCESS";

export const OpenNotif = () => ({
    "type": OPEN_NOTIF,
});

export const OpenNotifSuccess = () => ({
    "type": OPEN_NOTIF_SUCCESS,
});

export const NewNotif = (data) => ({
    "type": NEW_NOTIF,
    data: data,
});

export const GetNotif = () => ({
    "type": GET_NOTIF,
});

export const GetNotifSuccess = (notif) => ({
    "type": GET_NOTIF_SUCCESS,
    notif: notif,
});