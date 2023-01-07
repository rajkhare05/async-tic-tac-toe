import '../css/Home.css';
import '../css/Global.css';

function Home() {
    return (
        <div id="home">
            <div className="block"></div>
            <div id="box1">
                <h5>Async</h5>
                <h1>Tic Tac</h1>
                <h1>Toe</h1>
            </div>
            <div className="block"></div>
            <button className="primary-btn btn-flex-center">Login</button>
            <button className="secondary-btn btn-flex-center">Registration</button>
        </div>
    );
}

export default Home;
