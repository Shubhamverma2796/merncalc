import logo from './logo.svg';
import './App.css';
import Calc from './Components/Calc';
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './Components/ErrorPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Calc/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
