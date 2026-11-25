import { BrowserRouter, Route, Routes } from "react-router-dom";

import Project from "./Project.jsx";
import Login from "./Login.jsx";
import Tasks from "./Tasks.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/project" element={<Project />} />

                    <Route path="/login" element={<Login />} />

                    <Route path="/tasks" element={<Tasks />} />

                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;