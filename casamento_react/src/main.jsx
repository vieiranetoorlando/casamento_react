import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; // Certifique-se de que esta linha está presente

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/casamento_react">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);