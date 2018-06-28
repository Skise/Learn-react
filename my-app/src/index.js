import React from 'react';
import { render } from "react-dom";
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { History } from './history.js';



render(
    (
        <BrowserRouter>
            <History />
        </BrowserRouter>
    ),
    document.getElementById('root')
);