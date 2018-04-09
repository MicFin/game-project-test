
const signUp = function(data){

  return $.ajax({
    url: "https://wdi-library-api.herokuapp.com/sign-up",
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
