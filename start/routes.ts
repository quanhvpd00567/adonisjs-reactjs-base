/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

Route.get('/login', 'Admin/AuthController.index')
Route.post('/login', 'Admin/AuthController.do_login')
Route.get('/', 'Admin/HomeController.index')

// Route.get("/login", async ({ inertia }) => {
//   return inertia.render("Login", {
//     title: "Login",
//   });
// });

// Route.post("/login", async ({ inertia, request }) => {
//   console.log('aa');
//   return inertia.render("Login", {
//     title: "Login",
//   });
// });