import React from 'react'
import { Route, Link } from 'react-router-dom'
import AuthorsPage from '../authors/AuthorsPage'
import About from '../about'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={AuthorsPage} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
