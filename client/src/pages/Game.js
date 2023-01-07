// import { useState } from "react";
import cross from '../assets/cross.png';
import cross1 from '../assets/cross.svg';
import '../css/Global.css';
import '../css/game.css';
import Grid from "../components/Grid";

function Game() {
    // const [opponent, setOpponent] = useState('');
    // const [position, setPosition] = useState('');

    const navigationBtnStyle = {
        paddingLeft: '3px',
        marginBottom: '13px'
    };

    const submitBtnStyle = {
        marginTop: '35px'
    };


    // piece CSS
    // R:  44, G: 141, B: 255 | Hex: #2C8DFF // Blue
    // R: 255, G:  79, B:  79 | Hex: #FF4F4F // Red

    // Grid CSS
    // R: 255, G: 231, B: 158 | Hex: #FFE79E

    return (
        <div id='game'>
            <span className='navigate-back' style={navigationBtnStyle}>&lt;</span>
            <div className='container'>
                <h1>Game with {/*opponent*/} Bruce</h1>
                <span>Your piece</span>
                <img src={cross} className='piece' />
                <div className='move'>Your move</div>
                <Grid />
                <button className='primary-btn' style={submitBtnStyle}>Submit!</button>
            </div>
        </div>
    );
}

export default Game;
