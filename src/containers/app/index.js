import React from 'react'
import { NavLink } from 'react-router-dom'

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
  </div>
)

export default App
