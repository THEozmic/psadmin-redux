import React from 'react'
import { Route, NavLink, Redirect } from 'react-router-dom'
import AuthorsPage from '../authors/AuthorsPage'
import CoursesPage from '../courses/CoursesPage'
import About from '../about'

const App = () => (
  <div>
    <nav className="p-3">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/authors">
            Authors
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/courses">
            Courses
          </NavLink>
        </li>
      </ul>
    </nav>
    <main>
      <Route exact path="/authors" component={AuthorsPage} />
      <Route exact path="/courses" component={CoursesPage} />
      <Redirect from="/" to="/authors" />
    </main>
  </div>
)

export default App
