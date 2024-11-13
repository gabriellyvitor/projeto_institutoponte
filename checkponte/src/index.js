import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import Checkponte from './Checkponte';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'GothamPro', 'Montserrat', 'Poppins', 'Roboto', 'Oxygen';
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

li {
    list-style: none;    
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Checkponte />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();