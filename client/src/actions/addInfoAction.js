export const GET_OPTIONS = "GET_OPTIONS";

export const GET_OPTIONS_SUCCESS = "GET_OPTIONS_SUCCESS";

export const CREATE_OPTION = "CREATE_OPTION";

export const CREATE_OPTION_SUCCESS = "CREATE_OPTION_SUCCESS";

export const CREATE_OPTION_ERROR = "CREATE_OPTION_ERROR";

export const ADD_INFO = "ADD_INFO";

export const ADD_INFO_SUCCESS = "ADD_INFO_SUCCESS";

export const ADD_INFO_ERROR = "ADD_INFO_ERROR";

export const GET_LOC = "GET_LOC";

export const ADD_LOCATION = "ADD_LOCATION"

export const ADD_LOCATION_SUCCESS = "ADD_LOCATION_SUCCESS";

export const getOptions= () => ({
  "type": GET_OPTIONS
});

export const getOptionsSuccess = (options) => ({
    "type": GET_OPTIONS_SUCCESS,
    options
});

export const createOption = (option) => ({
  "type": CREATE_OPTION,
  "data": { value: option, label: option }
});

export const createOptionSuccess = (option) => ({
  "type": CREATE_OPTION_SUCCESS,
  option
});

export const createOptionError = (error) => ({
  "type": CREATE_OPTION_ERROR,
  error
});

export const addInfo = (data, id) => ({
  "type": ADD_INFO,
  "data": data,
  "id": id,
});

export const addInfoSuccess = (info) => ({
  "type": ADD_INFO_SUCCESS,
  "info": info
});

export const addInfoError = (error) => ({             
  "type": ADD_INFO_ERROR,
  error
});

export const getLoc = () => ({
  "type": GET_LOC,
});

export const addLocation = (loc) => ({
  "type": ADD_LOCATION,
  loc
});

export const addLocationSuccess = (loc) => ({
  "type": ADD_LOCATION_SUCCESS,
  loc
});