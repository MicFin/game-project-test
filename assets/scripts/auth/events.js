'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require ('./api.js')
const ui = require ('./ui.js')

const addHandlers = function() {

  $('#sign-up').on('submit', function(event){
    event.preventDefault()

    const data = getFormFields(event.target)

    api.signUp(data)
      .then(ui.signUpSuccess)
      .catch(ui.signUpFailure)
  })

  $('#sign-in').on('submit', function(event){
    event.preventDefault()

    const data = getFormFields(event.target)

    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signUpFailure)
  })

}

module.exports = {
  addHandlers
}
