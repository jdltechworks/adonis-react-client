import React, { Component } from 'react'
import Navigation from '../components/Navbar'

export default class App extends Component {
    render() {
        return(
            <div className="app-container">
                <Navigation />
                {this.props.children}
            </div>
        )
    }
}