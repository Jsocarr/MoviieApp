import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App'
import './index.css'
import { store } from './store';

const renderReactDom = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter> 
        <Provider store = { store }>
            <App />   
        </Provider>
    </HashRouter>
  );
}

renderReactDom();

