import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import App from './containers/app'
import AuthorsPage from './containers/authors/AuthorsPage'
import CoursesPage from './containers/courses/CoursesPage'
import UpdateCourse from './containers/courses/UpdateCourse'
import NotFoundPage from './containers/NotFoundPage'

import 'sanitize.css/sanitize.css'
import './index.css'
import './toastr.css'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
        <Switch>
          <Route exact path="/authors" component={AuthorsPage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route exact path="/courses/edit/:id" component={UpdateCourse} />
          <Redirect exact from="/" to="authors" />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
