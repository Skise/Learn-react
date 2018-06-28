import React, { Component } from 'react';
import './imgShow.css';
import { ImgItem } from './imgItem/imgItem';
import { ImgArrows } from './imgArrows/imgArrows';
import { ImgDots } from './imgDots/imgDots';

class ImgShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nowLocal: 0,
        };
    }

    //控制图片向前向后跳转
    turn(n) {
        var _n = this.state.nowLocal + n;
        //防止意外情况，_n表示轮播的下一项
        if (_n < 0) {
            _n = _n + this.props.items.length;
        } else if (_n >= this.props.items.length) {
            _n = _n-this.props.items.length;
        }
        this.setState({
            nowLocal: _n
        })
    }

    //自动轮播
    goPlay() {
        if (this.props.autoplay) {
            this.autoPlayFlag = setInterval(() => {
                this.turn(1);
            }, this.props.delay * 1000);
        }
    }

    //暂停自动轮播
    pausePlay() {
        clearInterval(this.autoPlayFlag);
    }

    //渲染时装载
    componentDidMount() {
        this.goPlay();
    }

    render() {
        let count = this.props.items.length;
        let itemNodes = this.props.items.map((item, idx) => {
            return (
                <ImgItem item={ item } count={ count } key={ 'item' + idx } />
            );
        });
        let arrowNodes = <ImgArrows turn={ this.turn.bind(this) } />;
        let dotNodes = <ImgDots turn={ this.turn.bind(this) } count={ count } nowLocal={ this.state.nowLocal } />;

        return (
            <div
                className='imgShow'
                onMouseOver={ this.props.pause ? this.pausePlay.bind(this) : null }
                onMouseOut={ this.props.pause ? this.goPlay.bind(this) : null }>
                    <ul style={{
                        left: -100 * this.state.nowLocal + '%',
                        transitionDuration: this.props.speed + 's',
                        width: this.props.items.length * 100 + '%',
                    }}>
                        { itemNodes }
                    </ul>
                    { this.props.arrows ? arrowNodes : null }
                    { this.props.dots ? dotNodes : null }
            </div>
        );
    }
}

//设置默认值
ImgShow.defaultProps = {
    speed: 1,
    delay: 2,
    pause: true,
    autoplay: true,
    dots: true,
    arrows: true,
    items: [],
};
ImgShow.autoPlayFlag = null;

export default ImgShow;