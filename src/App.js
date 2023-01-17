import TopBar from "./Components/topbars/TopBar";
import Home from "./Pages/Home/Home"
import Single from "./Pages/Single/Single"
import Write from "./Pages/Write/Write";
import Setting from "./Pages/Settings/Setting";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Test from "./Pages/test";
import Profile from "./Pages/Settings/Profile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { useContext } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";


function App() {
  
  return ( 
    <Router>
    <TopBar />
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/posts" element={<Home />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/post/:id" element={<Single />}/>
      <Route path="/write" element={<Write />}/>
      <Route path="/settings" element={<Profile />}/>
      {/* <Route path="/login" element={<Test/>}/> */}
    </Routes>
  </Router>
  );
}

export default App;
