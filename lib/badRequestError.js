const badRequestError = (message) =>{
      let data = {
        success: false,
        message,
       }

      return data;
}

module.exports = badRequestError;