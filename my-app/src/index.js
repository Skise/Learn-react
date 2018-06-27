import React from 'react';
import { render } from "react-dom";
import './index.css';
import Header from './components/header/header.js';
// import { RouterMap } from './router';

render(
    <div className='place'>
        <Header />
    </div>,
    document.getElementById('root')
);