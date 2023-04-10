import Image from 'next/image';
import Countdown from './Countdown';
import { Anime } from '../lib/types';

const AnimeCard = ({ anime }: { anime: Anime }) => {
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
                className="rounded-xl hover:scale-105 transition"
              ></Image>
              <h1 className="text-lg w-5/6 hover:underline underline-offset-2 decoration-2 cursor-pointer transition">
                {anime.title_english && anime.title_english.length > 55
                  ? anime.title_english.slice(0, 55) + '...'
                  : anime.title_english ||
                    anime.title}
              </h1>
              {(anime.broadcast.day && anime.broadcast.time) && <Countdown
                broadcast={{
                  day: anime.broadcast.day,
                  time: anime.broadcast.time,
                }}
              />}
              {/* <Countdown
                broadcast={{
                  day: anime.broadcast.day,
                  time: anime.broadcast.time,
                }}
              /> */}
            </div>
          </section>
        );
};

export default AnimeCard;
