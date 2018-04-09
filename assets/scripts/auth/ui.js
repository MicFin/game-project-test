'use strict'

const signUpSuccess = function() {
  $('#message').text('it worked')
}

const signUpFailure = function() {
  $('#message').text('it worked...NOT')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
