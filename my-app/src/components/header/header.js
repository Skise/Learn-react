import React, { Component } from 'react';
import { List } from '../list／list.js';
// import { render } from 'react-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        var navList = ['首页', '新闻', '美食', '我的'];
        return (
            <div className='headers'>
                <div className='logo'>实验产品</div>
                <List navList={ navList } />
            </div>
        );
    }
}