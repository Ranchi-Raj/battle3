import './App.css';
import Home from './Components/Home';
import {Route, Routes} from 'react-router-dom';
import Jobs from './Components/Jobs'
import Network from './Components/Network';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">

     <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/job" element = {<Jobs/>} />
      <Route path = "/network" element = {<Network/>}/>
      <Route path = '/profile' element = {<Profile/>}/>
	</Routes>
    </div>
  );
}

export default App;
