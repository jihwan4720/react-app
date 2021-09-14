import React, { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('아령하세여');
    const onClickLeave = () => setMessage('아령히 가세여');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{ color : 'red' }} onClick={() => setColor('red')}>red</button>
            <button style={{ color : 'green' }} onClick={() => setColor('green')}>red</button>
            <button style={{ color : 'blue' }} onClick={() => setColor('blue')}>red</button>
        </div>
    );
};

export default Say