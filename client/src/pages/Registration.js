import { useState } from 'react';
import axios from 'axios';
import '../css/Form.css';
import '../css/Global.css';

function Registration() {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const URI = 'http://127.0.0.1:4000/registration';

        try {
            const response = await axios.post(URI, { name, username, email, password });
            const data = await response.data;
            alert(data.message);
            
        } catch (err) {
            const statusCode = err.response.status;
            const message = err.response.data.message;
            if (statusCode !== 201) alert(message);
        }
    }

    return (
        <div className='Form'>
            <span className='navigate-back'>&lt;</span>
            <h5>Create account</h5>
            <h1>Let's get to know you better!</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor='name'>Your name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Type your name here' required />
                <br />

                <label htmlFor='username'>Username</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Type your username here' required />
                <br />

                <label htmlFor='email'>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Type your email here' required />
                <br />

                <label htmlFor='password'>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Type your password here' required />
                <br />

                <button type='submit' className='secondary-btn'>Register</button>

            </form>
        </div>
    );
}

export default Registration;
