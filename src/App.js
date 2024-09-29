import logo from './logo.svg';
import './App.css';
import Input from './Input.js';
import Hello from './Hello.js';
import List from './List.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <img src={logo} className="App-logo" alt="logo" />
        
        <Input />
        <List />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
