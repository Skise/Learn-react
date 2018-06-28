import React, { Component } from 'react';
import './imgDots.css';

class ImgDots extends Component {
    constructor(props) {
        super(props);
        // this.handleDotClick = this.handleDotClick.bind(this);
    }

    handleDotClick(i) {
        let option = i - this.props.nowLocal;//判断左移还是右移
        this.props.turn(option);
    }

    render() {
        let dotNodes = [];
        let { count, nowLocal } = this.props;
        for (let i = 0; i < count; i++) {
            dotNodes[i] = (
                <span
                    key={ 'dot' + i }
                    className={ 'img_dots' + (i === nowLocal ? ' img_dot_select' : '') }
                    onClick={ this.handleDotClick.bind(this, i) }>
                </span>
            );
        }
        return (
            <div className='img_dot_wrap'>
                { dotNodes }
            </div>
        )
    }
}

export { ImgDots };