import axios from 'axios'

export function execute(method, resource, data, params) {

  let proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  return axios({method, url: proxyUrl + resource, data, params}).then((response) => {
    return response.data
  })

}