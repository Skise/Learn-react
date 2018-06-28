import React, { Component } from 'react';
import './imgItem.css';

class ImgItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { count, item } = this.props;
        let width = 100/count + '%';
        return (
            <li className='imgItems' style={{ width: width }}>
                <img src={ item.src } alt={ item.alt } />
            </li>
        );
    }
}

export { ImgItem };