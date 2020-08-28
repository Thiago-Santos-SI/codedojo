'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/', () => "Welcome to the user authentication api proposed by Shin Iti Renan China")

Route.post('users', 'UserController.store')

Route.post('sessions', 'SessionController.store')

Route.get('users', 'UserController.index')

Route.post('passwords', 'ForgotPasswordController.store')

Route.put('passwords', 'ForgotPasswordController.update')
