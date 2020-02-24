import axios from "axios";

export const request = (config, token)=> {

  const responsePromise = axios({
    ...config,
    "headers": {"Authorization": token},
  });
  return responsePromise;
};