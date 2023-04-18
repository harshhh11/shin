import Image from 'next/image';
import Countdown from './Countdown';
import { Anime } from '../lib/types';

const AnimeCard = ({ anime }: { anime: Anime }) => {
  return (
    <section className="bg-zinc-800 rounded-xl text-white h-[520px] py-4 text-center hover:scale-105 transition">
      <a href={anime.trailer.url} target='_blank'>
      <div className="flex flex-col items-center justify-between h-full">
        <Image
          src={anime.images.webp}
          alt={anime.title}
          height={200}
          width={270}
          className="rounded-xl "
        ></Image>
        <h1
          className="text-lg w-5/6 hover:underline underline-offset-2 decoration-2 cursor-pointer transition mb-1"
          title={anime.title_english}
        >
          {anime.title_english && anime.title_english.length > 50
            ? anime.title_english.slice(0, 50) + '...'
            : anime.title_english || anime.title}
        </h1>
        {anime.broadcast.day && anime.broadcast.time && (
          <Countdown
            broadcast={{
              day: anime.broadcast.day,
              time: anime.broadcast.time,
            }}
          />
        )}
      </div>
      </a>
    </section>
  );
};

export default AnimeCard;
