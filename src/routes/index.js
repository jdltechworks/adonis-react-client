import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from '../containers/App'
import Home from '../containers/Home'
import User from '../containers/User'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="user" component={User}></Route>
    </Route>
)

export default routes