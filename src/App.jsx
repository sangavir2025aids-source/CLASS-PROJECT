import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from "./Pages/Clients.jsx";
import Team from "./Pages/Team.jsx";
import Project from "./Pages/Project.jsx";
import Login from "./Pages/Login.jsx";
import Tasks from "./Pages/Tasks.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Calendar from "./Pages/Calendar.jsx";
import Settings from "./Pages/Settings.jsx";

function App() {
    return (
        <>
        <BrowserRouter>
             <Routes>
               <Route path ="/Project" element = {<Project/>}/>
               <Route path ="/Login" element = {<Login/>} />
               <Route path ="/Tasks" element = {<Tasks/>} />
               <Route path ="/Team" element = {<Team/>} />
               <Route path ="/Clients" element = {<Clients/>} />
               <Route path ="/Dashboard" element = {<Dashboard/>} />
               <Route path ="/Calendar" element = {<Calendar/>} />
               <Route path ="/Settings" element = {<Settings/>} />
             </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;