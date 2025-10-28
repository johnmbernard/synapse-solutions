// ...existing code...
import './App.css';
import Landing from './components/landing/Landing';
import logo from './components/landing/synapseLogo.png';

function App() {
  return (
    <div className="App">
      <Landing />
      <a href="https://jmbxlab.com" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Logo" className="site-logo" />
      </a>
    </div>
  );
}

export default App;
// ...existing code...
