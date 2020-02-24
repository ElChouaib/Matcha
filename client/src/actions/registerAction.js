export const INSCRIPTION_USER = "INSCRIPTION_USER";

export const INSCRIPTION_USER_SUCCESS = "INSCRIPTION_USER_SUCCESS";

export const INSCRIPTION_USER_ERROR = "INSCRIPTION_USER_ERROR";

export const EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION";

export const EMAIL_CONFIRMATION_SUCCESS = "EMAIL_CONFIRMATION_SUCCESS";

export const EMAIL_CONFIRMATION_ERROR = "EMAIL_CONFIRMATION_ERROR";

export const InscriptionAction = (dataInsc) => ({
  "type": INSCRIPTION_USER,
  "data": dataInsc
});

export const inscriptionUserSuccess = (data) => ({
    "type": INSCRIPTION_USER_SUCCESS,
    data
});

export const inscriptionError = (error) => ({
    "type": INSCRIPTION_USER_ERROR,
    error
});

export const EmailConfirmationAction = (token) => ({
  "type": EMAIL_CONFIRMATION,
  'token': token
});

export const EmailConfirmationSuccess = () => ({
    "type": EMAIL_CONFIRMATION_SUCCESS,
});

export const EmailConfirmationError = () => ({
    "type": EMAIL_CONFIRMATION_ERROR,
});