const utils = {

  /**
   * url<String>, param<String>
   * return {String}
   */
  parseGetParam: (url: string, param: string) => {
    let items = url.split('?')[1].split('&'), params = {}
    for (let i = 0; i < items.length; i++) {
      let parsedData = items[i].split('=')
      params[parsedData[0]] = parsedData[1]
    }
    return params[param]
  }

}

export default utils
