import React from 'react'

import Adonis from '../Components/Adonis'
import Inertia from '../Components/Inertia'

function Home() {
  return (
    <div className="flex flex-row justify-around items-center w-1/3 h-screen mx-auto">
      <Adonis />+<Inertia />
    </div>
  )
}

export default Home