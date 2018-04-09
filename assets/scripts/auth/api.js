const config =('./../config.js')
const signUp = function(data){

  return $.ajax({
    url: config.apiUrl + "sign-up",
    method: "POST",
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

module.exports = {
  signUp
}
