import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import generateRedux '../redux/store'

const { store, action, history } = generateRedux(browserHistory)
const routes = {}

export default class ClientRoutes extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router history={history} routes={routes}></Router>
            </Provider>
        )
    }
}