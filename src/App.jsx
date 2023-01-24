import { useState } from 'react';
import Main from './components/Main';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;
