import { useState, useEffect } from 'react';
import { CountdownProps } from '../lib/types';

const Countdown = ({
  broadcast,
}: {
  broadcast: { day: string; time: string };
}) => {
  const [countDown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const dayIndex = [
    'Sundays',
    'Mondays',
    'Tuesdays',
    'Wednesdays',
    'Thursdays',
    'Fridays',
    'Saturdays',
  ].indexOf(broadcast.day);

  const getCountdown = (
    day: number,
    time: string
  ): CountdownProps => {
    const now = jstDate();
    const nextDate = nextDay(day);
    nextDate.setHours(Number(time.slice(0, 2)), Number(time.slice(3)), 0);

    if (nextDate < now) {
      nextDate.setDate(nextDate.getDate() + 7);
    }

    const timeRemaining = nextDate.getTime() - now.getTime();
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutesRemaining = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);

    return {
      days: daysRemaining,
      hours: hoursRemaining,
      minutes: minutesRemaining,
      seconds: secondsRemaining,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const countdown = getCountdown(dayIndex, broadcast.time);
      setCountdown(countdown)
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <ul className="flex justify-between w-5/6 text-white">
      <li className="bg-zinc-900 h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
        {countDown.days}d
      </li>
      <li className="bg-zinc-900 h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
        {countDown.hours}h
      </li>
      <li className="bg-zinc-900 h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
        {countDown.minutes}m
      </li>
      <li className="bg-zinc-900 h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
        {countDown.seconds}s
      </li>
    </ul>
  );
};

const jstDate = (): Date => {
  const now = new Date();
  const jstNow = now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' });
  const jstDate = new Date(jstNow);

  return jstDate;
};

const nextDay = (index: number): Date => {
  const now = jstDate();
  now.setDate(now.getDate() + (index + ((7 - now.getDay()) % 7)));
  return now;
};

export default Countdown;
