import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/LoginSignup/Login';
import Logout from './components/LoginSignup/Logout';
import Signup from './components/LoginSignup/Signup';
import MockInterview from './components/Mock Interview/MockInterview';
import Practice from './components/Practice/Practice';
import Profile from './components/Profile/Profile';
import SearchUser from './components/SearchUser/SearchUser';
function App() {
  return (
   <>


<Router>

      
      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/mock' element={<MockInterview />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/searchuser' element={<SearchUser />} />
      </Routes>

    </Router>
   
   </>
  );
}

export default App;
