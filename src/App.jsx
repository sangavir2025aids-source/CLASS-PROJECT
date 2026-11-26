import { BrowserRouter, Route, Routes } from "react-router-dom";

import Project from "./Pages/Project";
import Tasks from "./Pages/Tasks";
import Login from "./Pages/Login";
import Team from "./Pages/Team";
import Clients from "./Pages/Clients";
import Dashboard from "./Pages/Dashboard";
import Calendar from "./Pages/Calendar";
import Settings from "./Pages/Settings";
import Register from "./Pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/team" element={<Team />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;