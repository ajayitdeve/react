import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greet from './components/Greet';
import { MyGreet } from './components/MyGreet';
import { Welcome } from './components/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Greet name="ajay Pandey"/>
    <MyGreet />
    <Welcome name="ajay"/>
    <Welcome name="vijay"><button>Click Me</button></Welcome>
    <Welcome name="rakesh"><a href="">This is link</a></Welcome>
  </React.StrictMode>
);

reportWebVitals();
