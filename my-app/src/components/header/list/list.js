import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './list.css';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // clickState: false,
            clicked: 'app',
            choose: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let key = e.target.id;
        let cos = this.state.choose;
        console.log(!!cos, cos);
        // this.props.clicked = true;
        this.setState({
            clicked: key,
            choose: (!!cos) ? '' : key,
        })
    }

    render() {
        let arr = this.props.navList;
        // console.log(arr);
        const listItems = arr.map((item) => 
            {
                // console.log('item-------', item);
                const { title, path } = item;
                const pathKey = path.slice(1);
                // console.log('title    path -----', title, path.slice(1));
                if (pathKey === this.state.clicked && pathKey === this.state.choose) {
                    return (
                        <li 
                            key={ pathKey }
                            id={ pathKey }
                            className={ (this.state.clicked === pathKey) ? 'listed' : 'nav-list' }
                            onClick={this.handleClick}>
                                {title}
                                <SedList id={ pathKey } />
                        </li>
                    );
                } else {
                    return (
                        <li 
                            key={ pathKey }
                            id={ pathKey }
                            className={ (this.state.clicked === pathKey) ? 'listed' : 'nav-list' }
                            onClick={this.handleClick}>
                                {title}
                        </li>
                    );
                }
            }
        );
        // console.log(listItems);
        return (
            <ul id='listUl'>
                { listItems }
            </ul>
        );
    }
}

class SedList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        let lists = [
            {
                id: 'app',
                item: ['介绍', '详情', '人员分布', '近期任务']
            },
            {
                id: 'food',
                item: ['介绍', '详情', '人员分布', '近期任务']
            },
            {
                id: 'news',
                item: ['介绍', '详情', '人员分布', '近期任务']
            },
            {
                id: 'home',
                item: ['介绍', '详情', '人员分布', '近期任务']
            }
        ];
        let key = this.props.id;
        const lines = lists.map((item) => {
            // console.log('item---', item.id);
            // console.log('itemArr-------', item.item);
            if (item.id === key) {
                console.log('id', this.props.id);
                // console.log(id, itemArr);s
                const sedLists = item.item.map((item) => 
                    {
                        console.log('list-----', item);
                        return (
                            <li 
                                className='idItem'
                                key={ item }>
                                    { item }
                            </li>
                        );
                    }
                );
                return sedLists;
            } else {
                return '';
            }
        });
        return (
            <ul className='little-list'>
                { lines }
            </ul>
        );
    }
}

export default List;