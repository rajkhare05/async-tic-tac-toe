function Toast({ variant, message }) {

    let bgColor;

    if (variant === 'success') {
        bgColor = '#6FCF97';

    } else if (variant === 'failed'){
        bgColor = '#EB5757';
    }

    const toastStyle = {
        position: 'absolute',
        color: 'white',
        backgroundColor: bgColor,
        fontWeight: '500',
        width: '300px',
        borderRadius: '7px',
        textAlign: 'center',
        padding: '20px 0',
        fontSize: '15px',
        marginTop: '280px'
    };

    return (
        <div style={toastStyle}>
            { message }
        </div>
    );
}

export default Toast;
