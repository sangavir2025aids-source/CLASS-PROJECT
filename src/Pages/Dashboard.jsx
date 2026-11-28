import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const [userdata, setUserData] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setUserData(location.state);
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={() => setCount(count + 1)}> Count: {count}</button>
        </div>
    );
}

export default Dashboard;