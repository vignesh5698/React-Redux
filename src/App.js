import React from 'react';
import './App.css';
import Home from './Components/Home';
import Home2 from './Components/Home2';

function App() {
  return (
    <div>
      <Home/>
      <Home2 name='TESTER.org' a='a' b='b' c='c' />
    </div>
  );
}

export default App;
