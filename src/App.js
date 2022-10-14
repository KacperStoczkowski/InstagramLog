import './App.css';
import LogForm from './components/LogForm'
import MainPage from './components/MainPage'
import ContentLeft from './components/ContentLeft'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/RegistrationForm' element={<RegistrationPage/>}/>
        </Routes>
      </Router>
  );
};

export default App;
