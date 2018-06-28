import React from 'react';
import { render } from "react-dom";
import './index.css';
import Header from './components/header/header.js';
import ImgShow from './components/imgShow/imgShow.js'
// import { RouterMap } from './router';

const image_data = [
    {
        src: require('./static/imgs/1.jpg'),
        alt: 'images_1'
    },
    {
        src: require('./static/imgs/2.jpg'),
        alt: 'images_2'
    },
    {
        src: require('./static/imgs/3.jpg'),
        alt: 'images_3'
    },
    {
        src: require('./static/imgs/4.jpg'),
        alt: 'images_4'
    },
    {
        src: require('./static/imgs/5.jpg'),
        alt: 'images_5'
    },
    {
        src: require('./static/imgs/1.jpg'),
        alt: 'images_1'
    }
]

render(
    <div className='place'>
        <Header />
        <ImgShow 
            items={ image_data }
            speed={ 1.2 }
            delay={ 2 }
            pause={ true }
            autoplay={ true }
            dots={ true }
            arrows={ true } 
        />
    </div>,
    document.getElementById('root')
);