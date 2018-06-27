import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { IndexRoute } from 'react-router-dom';
import APP from './components/app/app.js';
import FOOD from './components/food/food.js';
import NEWS from './components/news/news.js';
import HOME from './components/home/home.js';
import Header from './components/header/header.js';

class RouterMap extends Component {
    render() {
       return (
        <Router>
            <Route path="/" component={ Header }>
                <IndexRoute component={ APP } />
                <Route path="/food" component={ FOOD } />
                <Route path="/news" component={ NEWS } />
                <Route path="/home" component={ HOME } />
            </Route>
        </Router>
       )
    }
}

export { RouterMap };