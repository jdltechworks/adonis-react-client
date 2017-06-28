import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import initRedux from '..store'
import routes from '../routes'

const { store, action, history } = initRedux(browserHistory, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

export default class ClientProvider extends Component {
    render() {
        return(
            <Provider store={store}>
                <Router history={history} routes={routes}></Router>
            </Provider>
        )
    }
}