import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var arr = this.props.navList;
        return (
            <ul>
                arr.map((item) => {
                    <li className='nav-li'>{ item }</li>
                })
            </ul>
        );
    }
}

export default { List };