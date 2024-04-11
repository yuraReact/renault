import './App.css';
import Header from './components/header/index.js';
import Main from './components/main/index.js';
import NavButtons from './components/navButtons/index.js';



function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <NavButtons/>
    </div>
  );
}

export default App;
