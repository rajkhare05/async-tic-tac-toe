import { useState } from 'react';
import '../css/Global.css';
import '../css/Form.css';
import axios from 'axios';

function Search() {
    const buttonStyle = {
        marginTop: '210px'
    };

    const [email, setEmail] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const URI = 'http://127.0.0.1:4000/search';

        try {
            const response = await axios.post(URI, { email });
            const data = await response.data;
            alert(data.message);

        } catch (err) {
            // const statusCode = err.response.status;
            const message = err.response.data.message;
            alert(message);
        }
    }

    return (
        <div className='Form'>
            <span className='navigate-back'>&lt;</span>
            <h5>Start a new game</h5>
            <h1>Whom do you want to play with</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor='email'>Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Type their email here' required />
                <br />
                
                <button className='primary-btn' style={buttonStyle} >Start game</button>
            </form>
        </div>
    );
}

export default Search;
