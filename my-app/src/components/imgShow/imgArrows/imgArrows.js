import React, { Component } from 'react';
import './imgArrows.css';

class ImgArrows extends Component {
    constructor(props) {
        super(props);
    }

    handleArrowClick(option) {
        this.props.turn(option);
    }

    render() {
        return (
            <div className='img_arrow_wrap'>
                <span
                    className='img_arrow img_arrow_left'
                    onClick={ this.handleArrowClick.bind(this, -1) }>
                        &lt;
                </span>
                <span
                    className='img_arrow img_arrow_right'
                    onClick={ this.handleArrowClick.bind(this, 1) }>
                        &gt;
                </span>
            </div>
        )
    }
}

export { ImgArrows };