import cross from '../assets/cross.png';
import ring from '../assets/ring.png';
import '../css/grid.css';

function Grid() {
    const pieceStyle = {
        width: '70px',
        height: '70px'
    };
    return (
        <div className='grid-container'>
            <div className="grid-item" id='p00'>
                <img src={cross} style={pieceStyle} alt='p00' />
            </div>
            <div className="grid-item" id='p01'>
                <img src={ring} style={pieceStyle} alt='p01' />
            </div>
            <div className="grid-item" id='p02'>
                <img src={cross} style={pieceStyle} alt='p02' />
            </div>
            <div className="grid-item" id='p10'>
                <img src={cross} style={pieceStyle} alt='p10' />
            </div>
            <div className="grid-item" id='p11'>
                <img src={cross} style={pieceStyle} alt='p11' />
            </div>
            <div className="grid-item" id='p12'>
                <img src={cross} style={pieceStyle} alt='p12' />
            </div>
            <div className="grid-item" id='p20'>
                <img src={cross} style={pieceStyle} alt='p20' />
            </div>
            <div className="grid-item" id='p21'>
                <img src={cross} style={pieceStyle} alt='p21' />
            </div>
            <div className="grid-item" id='p22'>
                <img src={cross} style={pieceStyle} alt='p22' />
            </div>
        </div>
    );
}

export default Grid;
