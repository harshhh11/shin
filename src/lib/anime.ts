import axios from 'axios';
import { Anime } from './types';

interface AnimeResponse {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  title: string;
  title_english: string;
  title_japanese: string;
  synopsis: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
}

const getAnime = async (): Promise<Anime[]> => {
  const res = await axios.get('https://api.jikan.moe/v4/seasons/now');
  const anime = res.data.data; 
  const animeList = anime.map((show: AnimeResponse) => {
    return {
      url: show.url,
      images: { jpg: show.images.jpg.large_image_url, webp: show.images.webp.large_image_url },
      trailer: { url: show.trailer.url, embedUrl : show.trailer.embed_url },
      title: show.title,
      title_english: show.title_english,
      youtube_id: show.trailer.youtube_id, 
      season: show.season,
      year: show.year,
      broadcast: {
        day: show.broadcast.day,
        time: show.broadcast.time
      }
    }
  })

  return animeList;
}

export default getAnime;