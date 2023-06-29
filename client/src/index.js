import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import {Header} from './components'
import './css/styles.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>

);
