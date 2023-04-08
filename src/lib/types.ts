export type Anime = {
  url: string;
  images: {
      jpg: string;
      webp: string;
  };
  trailer: {
      url: string;
      embedUrl: string;
  };
  title: string;
  season: string;
  year: number;
  broadcast: {
      day: string;
      time: string;
  };
}; 

