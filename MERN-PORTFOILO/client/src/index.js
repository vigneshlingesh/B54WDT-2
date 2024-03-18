import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/Store';
import { Provider } from 'react';
import { DatePicker } from 'antd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    
    <App />
    <DatePicker />
  </Provider>
);


reportWebVitals();
