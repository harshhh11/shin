import { Anime } from '../lib/types';
import Image from 'next/image';
import Countdown from './Countdown';

const AnimeCard = ({ animeList }: { animeList: Anime[] }) => {
  return (
    <article className="grid grid-cols-article gap-6 mx-24 justify-center">
      {animeList.map((anime) => {
        return (
          <section
            className="bg-zinc-800 rounded-xl text-white h-[540px] py-4 text-center"
            key={anime.title}
          >
            <div className="flex flex-col items-center justify-between h-full ">
              <Image
                src={anime.images.webp}
                alt={anime.title}
                height={200}
                width={270}
                className="rounded-xl grayscale hover:grayscale-0 hover:scale-105 transition"
              ></Image>
              <h1 className="text-lg w-5/6 hover:underline underline-offset-2 decoration-2 cursor-pointer transition">
                {anime.title.length > 50
                  ? anime.title.slice(0, 50) + '...'
                  : anime.title}
              </h1>
              <Countdown broadcast={ { day: anime.broadcast.day, time: anime.broadcast.time } }/>
              {/* <ul className="flex justify-between w-5/6 text-black ">
                <li className="bg-white h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
                  1d{anime.broadcast.day}
                </li>
                <li className="bg-white h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
                  14h{anime.broadcast.time}
                </li>
                <li className="bg-white h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
                  26m
                </li>
                <li className="bg-white h-[40px] w-[50px] rounded-lg flex justify-center items-center hover:scale-110 transition">
                  4s
                </li>
              </ul> */}
            </div>
          </section>
        );
      })}
    </article>
  );
};

export default AnimeCard;
