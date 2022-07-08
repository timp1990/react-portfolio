import './App.css';

// Import the components for use.
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Body />
      </body>
    </div>
  );
}

export default App;
