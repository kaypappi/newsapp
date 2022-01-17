import {
  required,
  confirmed,
  length,
  email,
  regex,
  ext,
} from 'vee-validate/dist/rules'
import Vue from 'vue'
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  validate,
} from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

  extend('required', {
    ...required,
    message: 'This field is required',
  })

  extend('email', {
    ...email,
    message: 'This field must be a valid email',
  })

  extend('confirmed', {
    ...confirmed,
    message: 'This field confirmation does not match',
  })

  extend('length', {
    ...length,
    message: 'This field must have 2 options',
  })

  extend('regex', {
    ...regex,
    message: 'Password must have at least one capital letter and number ',
  })

  extend('ext', {
    ...ext,
    message: 'The file format isnt supported ',
  })

