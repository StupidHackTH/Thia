import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom'
import App from './App';
import Card from './card';
// import ParamsExample from './footer'
export default class Routers extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/card/:id" component={Card}/>
                </div>
            </Router>
        )
    }
}
