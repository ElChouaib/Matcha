export const LOGIN_USER = "LOGIN_USER";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const LOGIN_USER_ERROR_FIELD = "LOGIN_USER_ERROR_FIELD";

export const CHECK_OMNI_TOKEN = "CHECK_OMNI_TOKEN";

export const LoginAction = (dataInsc) => ({
  "type": LOGIN_USER,
  "data": dataInsc
});

export const loginUserSuccess = () => ({
    "type": LOGIN_USER_SUCCESS,
});

export const loginError = (error) => ({
    "type": LOGIN_USER_ERROR,
    error
});

export const loginErrorField = (errorField) => ({
    "type": LOGIN_USER_ERROR_FIELD,
    errorField
});

export const checkOmniToken = (token) => ({
    "type": CHECK_OMNI_TOKEN,
    "token": token
});