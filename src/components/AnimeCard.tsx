import Image from 'next/image';
import Link from 'next/link';
import Countdown from './Countdown';
import { Anime } from '../lib/types';

const AnimeCard = ({ anime }: { anime: Anime }) => {
  return (
          <section
            className="bg-zinc-800 rounded-xl text-white h-[520px] py-4 text-center"
          >
            <div className="flex flex-col items-center justify-between h-full ">
              <Image
                src={anime.images.webp}
                alt={anime.title}
                height={200}
                width={270}
                priority
                className="rounded-xl hover:scale-105 transition"
              ></Image>
              <h1 className='text-lg w-5/6 hover:underline underline-offset-2 decoration-2 cursor-pointer transition mb-1' title={anime.title_english}>
              {/* // <Link href={`/anime/${anime.mal_id}`} > */}
                {anime.title_english && anime.title_english.length > 50
                  ? anime.title_english.slice(0, 50) + '...'
                  : anime.title_english ||
                    anime.title}
              {/* </Link> */}
              </h1 >
              {(anime.broadcast.day && anime.broadcast.time) && <Countdown
                broadcast={{
                  day: anime.broadcast.day,
                  time: anime.broadcast.time,
                }}
              />}
            </div>
          </section>
        );
};

export default AnimeCard;
