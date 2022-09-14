import './App.css';
import StartingPage from './components/StartingPage/StartingPage';
import Measure from './components/Measure/Measure';

function App() {
  return (
    <div className="wrapper">
      <div className='root'>
        <StartingPage />
        <Measure />

      </div>
    </div>
  );
}

export default App;
