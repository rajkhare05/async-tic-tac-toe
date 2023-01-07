import { useState } from 'react';
import Toast from '../components/Toast.js';
import axios from 'axios';
import '../css/Global.css';
import '../css/Form.css';

function Login() {
    const style = {
        marginTop: '180px'
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const URI = 'http://127.0.0.1:4000/login';

        try {
            const response = await axios.post(URI, { username, password });
            const data = await response.data;
            setIsLoggedIn(true);
            setMessage(data.message);

        } catch (err) {
            const message = err.response.data.message;
            setIsLoggedIn(false);
            setMessage(message);
        }

    }

    return (
        <div className='Form'>
            <span className='navigate-back'>&lt;</span>
            <h5>Login</h5>
            <h1>Please enter your details</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor='username'>Username</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Type your username here' required />
                <br />

                <label htmlFor='password'>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Type your password here' required />
                <br />
                { message && <Toast variant={isLoggedIn ? 'success' : 'failed'} message={message} /> }
                <button type='submit' className='primary-btn' style={style}>Login</button>
            </form>
        </div>
    );
}

export default Login;
