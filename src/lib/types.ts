export type Anime = {
  url: string;
  images: {
    jpg: string;
    webp: string;
  };
  trailer: {
    youtube_id: string;
    url: string;
    embedUrl: string;
  };
  title: string;
  title_english?: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
  };
  studio?: string;
};

export type CountdownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};
