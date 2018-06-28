import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './list.css';

//导航条组件
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 'app',
            choose: '',
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleClick(e) {
        let key = e.target.id;
        console.log(key);
        this.setState({
            clicked: key,
        })
    }

    handleMouseEnter(e) {
        let key = e.target.id;
        this.setState({
            choose: key
        });
    }

    handleMouseLeave() {
        this.setState({
            choose: ''
        });
    }

    render() {
        let arr = this.props.navList;
        const listItems = arr.map((item) => 
            {
                const { title, path } = item;
                const pathKey = path.slice(1);
                if (pathKey === this.state.clicked && pathKey === this.state.choose) {
                    return (
                        <li 
                            key={ pathKey }
                            id={ pathKey }
                            className={ (this.state.clicked === pathKey) ? 'listed' : 'nav-list' }
                            onClick={this.handleClick}
                            onMouseEnter={ this.handleMouseEnter }
                            onMouseLeave={ this.handleMouseLeave }
                            >
                                {/* <Link to={ path }>{title}</Link> */}
                                <a href={ path }>{ title }
                                    <SedList id={ pathKey } />
                                </a>
                        </li>
                    );
                } else if (pathKey === this.state.choose) {
                    return (
                        <li 
                            key={ pathKey }
                            id={ pathKey }
                            className={ (this.state.clicked === pathKey) ? 'listed' : 'nav-list' }
                            onClick={this.handleClick}
                            onMouseEnter={ this.handleMouseEnter }
                            onMouseLeave={ this.handleMouseLeave }
                            >
                                {/* <Link to={ path }>{title}</Link> */}
                                <a href={ path }>{ title }</a>
                                <SedList id={ pathKey }/>
                        </li>
                    );
                } else {
                    return (
                        <li 
                            key={ pathKey }
                            id={ pathKey }
                            className={ (this.state.clicked === pathKey) ? 'listed' : 'nav-list' }
                            onClick={this.handleClick}
                            onMouseEnter={ this.handleMouseEnter }
                            onMouseLeave={ this.handleMouseLeave }
                        >
                                <Link to={ path }>{title}</Link>
                        </li>
                    )
                }
            }
        );
        return (
            <ul className='listUl'>
                { listItems }
            </ul>
        );
    }
}

//二级菜单组件
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
            if (item.id === key) {
                const sedLists = item.item.map((item) => 
                    {
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