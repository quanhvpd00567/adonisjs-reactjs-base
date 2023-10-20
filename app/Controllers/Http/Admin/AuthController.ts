import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public index({ inertia }: HttpContextContract) {
    return inertia.render('Login')
  }

  public do_login({ inertia }: HttpContextContract) {
    return inertia.render('Login')
  }
}
