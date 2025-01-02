import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Countdown = () => {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const targetDate = "2025-01-15T00:00:00";
    const calculateTotalSeconds = () => {
        // const now = new Date();
        const distance = new Date(targetDate) - new Date();
        return Math.max(Math.floor(distance / 1000), 0); // Ensure it's not negative
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTotalSeconds(calculateTotalSeconds());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex justify-center space-x-4">
            <CountdownCircleTimer
                isPlaying
                duration={totalSeconds}
                colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000', 0.33]]}
                onComplete={() => console.log('Countdown complete!')}
            >
                {({ remainingTime }) => {
                    const days = Math.floor(remainingTime / (3600 * 24));
                    const hours = Math.floor((remainingTime % (3600 * 24)) / 3600);
                    const minutes = Math.floor((remainingTime % 3600) / 60);
                    const seconds = remainingTime % 60;

                    return (
                        <div className="text-center">
                            <div className="text-xl">{`${days}d ${hours}h ${minutes}m ${seconds}s`}</div>
                        </div>
                    );
                }}
            </CountdownCircleTimer>
        </div>
    );
};

export default Countdown;
