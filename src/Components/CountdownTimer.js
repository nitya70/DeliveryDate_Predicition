// components/CountdownTimer.js

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const CountdownTimer = ({ cutoffHour }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const cutoff = new Date();
      cutoff.setHours(cutoffHour, 0, 0, 0);

      const timeDifference = cutoff - now;
      if (timeDifference > 0) {
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        setTimeLeft(`${hours}h ${minutes}m left for same-day delivery`);
      } else {
        setTimeLeft('Cutoff time passed for same-day delivery');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [cutoffHour]);

  return (
    <View>
      <Text>{timeLeft}</Text>
    </View>
  );
};

export default CountdownTimer;
