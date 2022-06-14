import './App.css';
import SignUp from './Components/SignUp/SignUp';
import { Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import Candidate from './Components/Candidate/Candidate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/candidate' element={<Candidate/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
