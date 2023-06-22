import React, { useEffect, useState } from 'react'
import './SaleTimer.css'

const Timer = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    useEffect(() => {
        const countdownDate = new Date('2023-06-23').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                // Countdown has ended, perform any necessary actions
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className='count-down'>
            <div  className='each-countdown'>
                <div className='count-down-header'>
                    <h1>{countdown.days}</h1>
                </div>
                <div className='count-down-richtext'>
                    <p>days</p>
                </div>
            </div>
            <div className='each-countdown'>
                <div className='count-down-header'>
                    <h1>{countdown.hours}</h1>
                </div>
                <div className='count-down-richtext'>
                    <p>hours</p>
                </div>
            </div>
            <div className='each-countdown'>
                <div className='count-down-header'>
                    <h1>{countdown.minutes}</h1>
                </div>
                <div className='count-down-richtext'>
                    <p>minutes</p>
                </div>
            </div>
            <div className='each-countdown'>
                <div  className='count-down-header'>
                    <h1>{countdown.seconds}</h1>
                </div>
                <div className='count-down-richtext'>
                    <p>seconds</p>
                </div>
            </div>


        </div>
    )
}

export default Timer
