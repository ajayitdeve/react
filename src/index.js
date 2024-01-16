import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greet from './components/Greet';
import { MyGreet } from './components/MyGreet';
import { Welcome } from './components/Welcome';
import GrandWelcome from './components/GradWelcome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Greet name="ajay Pandey"/>
    <MyGreet />
    <Welcome name="ajay"/>
    <Welcome name="vijay"><button>Click Me</button></Welcome>
    <Welcome name="rakesh"><a href="">This is link</a></Welcome>
    <GrandWelcome name="ajay" age="44" />
    <GrandWelcome name="Ritesh" age="34">
      <p>Children Element</p>
    </GrandWelcome>
    <GrandWelcome name="Ritesh" age="34">
      <button>Button Children Element</button>
    </GrandWelcome>
  </React.StrictMode>
);

reportWebVitals();
