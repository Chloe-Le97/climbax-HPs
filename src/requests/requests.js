import axios from 'axios';

export const apiReq =  (endpoint) => {
  try {
    let req = axios.get(`https://healthypal-api.herokuapp.com/get/${enpoint}`);
    req.then((res) => {
      return res
    })
  } catch (e) {
    console.error(e);
    return e
  }
}
