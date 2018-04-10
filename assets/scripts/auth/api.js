const config =('./../config.js')
const store = require('./../store.js')


const signUp = function(data){
  return $.ajax({
    url: config.apiUrl + "/sign-up",
    method: "POST",
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

const signIn = function(data){

  return $.ajax({
    url: 'https://wdi-library-api.herokuapp.com/sign-in',
    method: "POST",
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

const changePassword = function(data){

  return $.ajax({
    url: 'h' + store.user.id,
    method: "POST",
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn
}
