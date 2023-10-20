import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class HomeController {
  public index({ inertia }: HttpContextContract) {
    console.log(inertia);
    return inertia.render('Home')
  }
}
