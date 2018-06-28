import React, { Component } from 'react';
import List from './list/list.js';
import { SearchBox } from './searchBox/searchBox.js';
import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var navList = [
            {
                title: '首页',
                path: '/app',
            },
            {
                title: '美食',
                path: '/food',              
            },
            {
                title: '新闻',
                path: '/news',
            },
            {
                title: '我的',
                path: '/home',
            }
        ];
        return (
            <header>
                <div className='logo'>实验产品</div>
                <SearchBox />
                <List navList={ navList }/>
            </header>
        );
    }
}