import React from 'react'
import {Router} from "@reach/router"
import AppIndex from './routes/app/AppIndex'

const App = () => {
  return (
    <div className="container mx-auto md:w-1/2 bg-gray-500">
      <Router>
        <AppIndex path="/" />
      </Router>
    </div>
  )
}

export default App