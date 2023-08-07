import { Routes, Route, BrowserRouter} from 'react-router-dom';

import './App.css';
import Explore from './pages/Explore';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Offers from './pages/Offers';
import ForgotPass from './pages/ForgotPass';
import Navbar from './components/Navbar';

function App() {
  return (
   <BrowserRouter>
          {/* Common Components */}
          <Routes>
            <Route path="/" element={<Explore/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/profile" element={<SignIn/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/forgot" element={<ForgotPass/>}/>
          </Routes>
          {/* Navbar */}
          <Navbar/>
   </BrowserRouter>
  )
}

export default App;
