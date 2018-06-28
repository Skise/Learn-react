import React, { Component } from 'react';
import Header from './components/header/header.js';
import { RouterMap } from './router';

class History extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Header />
                <RouterMap />
            </div>
        )
    }
}

export { History };