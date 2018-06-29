import React, { Component } from 'react';
// import { Router, Route } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { App } from './components/app/app.js';
import Food from './components/food/food.js';
import News from './components/news/news.js';
import Home from './components/home/home.js';

class RouterMap extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/food" component={Food} />
                <Route path="/news" component={News} />
                <Route path="/home" component={Home} />
            </Switch>
        );
    }
}

export { RouterMap };