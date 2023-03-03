import { useState} from "react"

import React, { useState } from 'react';

function SecondsToTimeConverter({ seconds }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    const totalSeconds = Number(seconds);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const remainingSeconds = totalSeconds % 60;
    setHours(hours);
    setMinutes(minutes);
    setRemainingSeconds(remainingSeconds);
  }, [seconds]);

  return (
    <div>
      <p>{hours} horas, {minutes} minutos y {remainingSeconds} segundos</p>
    </div>
  );
}

export default SecondsToTimeConverter;