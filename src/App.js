import './App.css';
import SignUp from './Components/SignUp/SignUp';
import { Routes, Route} from "react-router-dom";
import Login from './Components/Login/Login';
import Candidate from './Components/Candidate/Candidate';
import CandidateCreation from './Components/CandidateCreation/CandidateCreation';
import Navbar from './Components/Navbar';
import RequireAuth from './Components/RequireAuth';
import RequireAuthuser from './Components/RequireAuthuser';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<RequireAuthuser>
          <Login/>
        </RequireAuthuser>}></Route>
        <Route path='/signup' element={<RequireAuthuser>
          <SignUp/>
        </RequireAuthuser>}></Route>
        <Route path='/candidate' element={<RequireAuth>
          <Candidate/>
        </RequireAuth>}></Route>
        <Route path='/candidateform' element={<RequireAuth>
          <CandidateCreation/>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;
