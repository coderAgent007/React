import { StrictMode } from 'react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

const rootElemet = document.getElementById('root') as HTMLElement


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </StrictMode>,
  rootElemet
);

