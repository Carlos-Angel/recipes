import React, { useState } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(3);
  const [timeLeft, setTimeLeft] = useState(0);

  const start = async () => {
    // TODO: Chequear permisos

    let newTimer = timer;
    setTimeLeft(newTimer);

    const countdownInterval = setInterval(() => {
      newTimer = newTimer - 1;
      setTimeLeft(newTimer);
      if (newTimer <= 0) {
        clearInterval(countdownInterval);
        showNotification();
      }
    }, 1000);
  };

  const showNotification = async () => {
    // TODO: Enviar Notificación
    console.log('sended');
  };

  const handleChange = (e) => {
    setTimer(e.target.value);
  };

  return (
    <div className='Timer'>
      <div className='name'>Timer</div>
      {timeLeft === 0 ? (
        <div className='center'>
          <input
            type='number'
            min='0'
            max='999'
            step='1'
            value={timer}
            onChange={handleChange}
          />
          <button onClick={start}>Start</button>
        </div>
      ) : (
        <div className='timeLeft'>{timeLeft}s</div>
      )}
    </div>
  );
}
