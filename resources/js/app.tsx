import { InertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import React from 'react'
import ReactDOM from 'react-dom'
import SplashScreen from './Layouts/Splash'
import DefaultLayout from './Layouts/DefaultLayout'

import '../css/app.css'

InertiaProgress.init({
  color: '#ED8936',
  delay: 250,
  showSpinner: true
})

const app = document.getElementById('app') as HTMLElement
const init = JSON.parse(app.dataset.page as string)

const resolver = (name: string) =>
  import(`./Pages/${name}`).then(module => {
    const page = module.default
    if (!page.layout) {
      page.layout = DefaultLayout;
    }
    return page
  })

ReactDOM.render(
  <InertiaApp
    initialPage={init}
    resolveComponent={resolver}
    initialComponent={SplashScreen}
  />,
  app
)