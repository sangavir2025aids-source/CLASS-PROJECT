
import { Outlet, Link } from 'react-router-dom';

function Adminlayout() {
    return (
        <div>
            <h1>Admin Layout</h1>

            <nav>
                <ul>
                    <li><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li><Link to="/admin/settings">Settings</Link></li>
                    <li><Link to="/admin/userdetails">User Details</Link></li>
                </ul>
            </nav>
            

            <Outlet />
        </div>
    );
}

export default Adminlayout;
