
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Project from './pages/Project';
import Tasks from './pages/Tasks';
import Login from './pages/Login';
import Register from './pages/Register';
import Calendar from './pages/Calendar';
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Team from './pages/Team';

import Adminlayout from './pages/admin/adminlayout';
import AdminDashboard from './pages/admin/dashboard';
import AdminSettings from './pages/admin/Settings';
import Userdetails from './pages/admin/UserDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/project" element={<Project />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/calender" element={<Calendar />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/team" element={<Team />} />
                <Route path="/admin" element={<Adminlayout />}>
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="settings" element={<AdminSettings />} />
                    <Route path="userdetails" element={<Userdetails />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
