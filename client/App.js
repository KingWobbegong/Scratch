import React from 'react';
import MainContainer from './containers/MainContainer.jsx';
import NavBar from './components/NavBar';

const App = () => (
  <div id="app">
    <div>
      <NavBar />
    </div>
    <MainContainer />
  </div>
);

export default App;
