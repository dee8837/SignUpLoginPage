import './App.css';
import SignIn from './Pages/SignIn';
import {Routes,Route} from 'react-router-dom'
// import Welcome from './Pages/Welcome';
import SignUp from './Pages/SignUp';
// import Home from './Pages/Home';
import Welcome from './Pages/Welcome copy';
// import Cal from './Pages/Cal';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route path="/Home" element={<Home />} /> */}
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
       {/* <Ro ute path="/Cal" element={<Cal />} /> */}
      </Routes>
    </div>
  );
}

export default App;
