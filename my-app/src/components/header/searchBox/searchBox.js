import React, { Component } from 'react';
import './searchBox.css';

class SearchBox extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <label htmlFor='search'>搜索
                <input type='text' name='search' id='search' />
            </label>
        );
    }
}

export { SearchBox };