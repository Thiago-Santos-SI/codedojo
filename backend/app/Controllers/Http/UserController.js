'use strict'

const User = use('App/Models/User')

class UserController {
  async store ({request, response}) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }

  async index ({req}) {
    const data = User.all()

    return data
  }
}

module.exports = UserController
