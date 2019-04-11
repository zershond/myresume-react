import axios from 'axios';
import config from '../config/config';

export default class Http {
  constructor(options) {
    let config = {
      method: 'post',
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      responseType: 'json',
      timeout: 3000
    }
    if(options) {
      config = Object.assign(config, options);
    }
    this.$config = config
  }

  send = (path, params) => {
    let _config = {
      data: params
    }
    let _path = "";
    config.proxyTable.map((item) => {
      let strRegex = item.name;
      let regPattern = new RegExp(strRegex);
      if(regPattern.test(path)) {
        _path += config.proxyHost;
        _path += path.replace(regPattern, item.path);
        return;
      }
    })
    _config['url'] = _path;
    this.$config = Object.assign(this.$config, _config)
    console.log(this.$config);
    return axios.request(this.$config).catch((error) => {
      console.log(error);
    })
  }
}
