import React from 'react'
import {Router} from "@reach/router"
import AppIndex from './routes/app/AppIndex'

const App = () => {
  return (
    <Router>
      <AppIndex path="/" />
    </Router>
  )
}

export default App