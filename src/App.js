import './App.css';
import React, { useState } from 'react';

// Import the components for use.
import Header from './components/Header';
import PageContent from './components/PageContent';
import Footer from './components/Footer'

function App() {
  const [pageState, setPageState] = useState('About');

  function updatePageFunction(newPage) {
    setPageState(newPage)
  }

  return (
    <div className="App p-2">
      <header className="App-header">
        <Header pageState={pageState} updatePageFunction={updatePageFunction} />
      </header>
      <PageContent pageState={pageState} />
      <Footer />
    </div>
  );
}

export default App;
