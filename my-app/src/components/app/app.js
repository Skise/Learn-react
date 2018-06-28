import React, { Component } from 'react';
import ImgShow from '../imgShow/imgShow.js';



class App extends Component {
    constructor() {
        super();
    }

    render() {
        const image_data = [
            {
                src: require('../../static/imgs/1.jpg'),
                alt: 'images_1'
            },
            {
                src: require('../../static/imgs/2.jpg'),
                alt: 'images_2'
            },
            {
                src: require('../../static/imgs/3.jpg'),
                alt: 'images_3'
            },
            {
                src: require('../../static/imgs/4.jpg'),
                alt: 'images_4'
            },
            {
                src: require('../../static/imgs/5.jpg'),
                alt: 'images_5'
            }
        ];

        return (
            <div>
                <ImgShow 
                    items={ image_data }
                    speed={ 1.2 }
                    delay={ 2 }
                    pause={ true }
                    autoplay={ true }
                    dots={ true }
                    arrows={ true } 
            />
            </div>
        );
    }
}

export { App };