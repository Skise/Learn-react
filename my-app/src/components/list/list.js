import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var arr = this.props.navList;
        const listItems = arr.map((item) => 
            // console.log(item);
            <li key={item} className='nav-list'>{item}</li>
        );
        // console.log(listItems);
        return (
            <ul>
                { listItems }
            </ul>
        );
    }
}

export default List;