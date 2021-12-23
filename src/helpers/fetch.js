import axios from "axios";

const headers = {
  'x-token': localStorage.getItem('token')
}

const fetcnNoToken = (endpoint, data, method = 'get') => {
  
  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

  if(method === 'get') {

    return axios.get(url)

  } else {

    return axios({
      method,
      url,
      data
    });

  }

}

const fetchToken = (endpoint, data, method = 'get') => {

  const url = `${process.env.REACT_APP_API_URL}/${endpoint}`;

  if(method === 'get') {
    
    return axios.get(url, {
      headers
    })

  } else if(method === 'put') {

    return axios.put(url, data, {
      headers
    })

  } else {

    return axios({
      method,
      url,
      data,
      headers
    });

  }

}

export {
  fetcnNoToken,
  fetchToken
}