const backendUrl = 'http://localhost:8000'
const axios = require('axios')
const requests = {
  getProdustList (cb) {
    axios.get(backendUrl + '/productList')
      .then(res => {
        if (res.status === 200) {
          cb(res.data)
        }
      })
  }
}
export default function (Vue) {
  Vue.prototype._api = requests
}
