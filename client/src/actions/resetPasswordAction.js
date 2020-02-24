export const RESET_PASSWORD = "RESET_PASSWORD";

export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";

export const RESET_PASSWORD_ERROR = "RESET_PASSWORD_ERROR";

export const SEND_EMAIL = "SEND_EMAIL";

export const SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS";

export const SEND_EMAIL_ERROR = "SEND_EMAIL_ERROR";

export const SendEmail = (data) => ({
  "type": SEND_EMAIL,
  "data": data
});

export const SendEmailSuccess = () => ({
    "type": SEND_EMAIL_SUCCESS,
});

export const SendEmailError = (error) => ({
    "type": SEND_EMAIL_ERROR,
    error
});

export const ResetPasswordAction = (dataInsc) => ({
  "type": RESET_PASSWORD,
  "data": dataInsc
});

export const ResetPasswordSuccess = () => ({
    "type": RESET_PASSWORD_SUCCESS,
});

export const ResetPasswordError =  (error) => ({
    "type": RESET_PASSWORD_ERROR,
    error
});