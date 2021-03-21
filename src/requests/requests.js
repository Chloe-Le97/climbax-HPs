import axios from 'axios';

export const apiReq =  (endpoint) => {
  try {
    return axios.get(`https://healthypal-api.herokuapp.com/get/${endpoint}`).then((res) => {
      console.log(res)
      return res
    })
  } catch (e) {
    console.error(e);
    return e
  }
}
