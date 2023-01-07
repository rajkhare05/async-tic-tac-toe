import '../css/Global.css';
import '../css/dashboard.css';

function Dashboard() {
    return (
        <div id='dashboard'>
            <h1>Your Games</h1>
            <div className='wrapper'>
                <div id='box1'>
                    <h1>No Games</h1>
                    <h1>Found</h1>
                </div>
                <button className='primary-btn'>Start a new game</button>
            </div>
        </div>
    );
}

export default Dashboard;
