import { useState, useEffect } from 'react';

const Countdown = ({
  broadcast,
}: {
  broadcast: { day: string; time: string };
}) => {
  const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

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
  ): { days: number; hours: number; minutes: number; seconds: number } => {
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
      const coutdown = getCountdown(dayIndex, broadcast.time);
      setDay(coutdown.days);
      setHour(coutdown.hours);
      setMinutes(coutdown.minutes);
      setSeconds(coutdown.seconds);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <ul className="flex justify-between w-5/6 text-black ">
      <li className="bg-white h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
        {day}d
      </li>
      <li className="bg-white h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
        {hour}h
      </li>
      <li className="bg-white h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
        {minutes}m
      </li>
      <li className="bg-white h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
        {seconds}s
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
