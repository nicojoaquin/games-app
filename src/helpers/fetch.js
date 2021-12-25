import axios from "axios";

const headersToken = {
  'x-token': sessionStorage.getItem('token')
}

const fetcnNoToken = (url, data, method = 'get', headers) => {
  

  if(method === 'get') {

    return axios.get(url, headers)

  } else {

    return axios({
      method,
      url,
      data
    });

  }

}

const fetchToken = (url, data, method = 'get') => {

  if(method === 'get') {
    
    return axios.get(url, {
      headers: headersToken
    })

  } else if(method === 'put') {

    return axios.put(url, data, {
      headers: headersToken
    })

  } else {

    return axios({
      method,
      url,
      data,
      headers: headersToken
    });

  }

}

export {
  fetcnNoToken,
  fetchToken
}