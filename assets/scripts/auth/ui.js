'use strict'

const store = require('./../store.js')
const signUpSuccess = function() {
  $('#message').text('it worked')
}

const signUpFailure = function() {
  $('#message').text('it worked...NOT')
}

const signInSuccess = function(response) {
  $('#message').text('it worked')
  store.user = response.user
  // hide sign up from
  // hide sign in form
  // show change password form
  // show sign out button
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess
}
