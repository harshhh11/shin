// import getAnime from "~/lib/anime";
// import axios from 'axios';
// import { Anime } from "~/lib/types";
// import Header from "~/components/Header";
// import Image from 'next/image';

// const Anime = ({ anime }: { anime : Anime }) => {
//   return (<>
//   <Header season={anime.season} year={anime.year}/> 
//     <article>
//     <Image src={anime.images.jpg} width={400} height={500} alt={anime.title}></Image>
//     </article>
//     </>
//   )
// }

// export async function getStaticPaths() {
//   const animeList = await getAnime();

//   const paths = animeList.map(anime => ({
//     params: { id : anime.mal_id.toString() }
//   }))

//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }: { params: { id: number } }) {
//   const res = await axios(`https://api.jikan.moe/v4/anime/${params.id}`);
//   const anime = res.data.data;

//   return { props: { anime } }
// }

// export default Anime;