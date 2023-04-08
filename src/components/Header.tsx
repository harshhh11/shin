import { AniList, Kitsu, MAL } from '~/components/svgs';

const Header = () => {
  return (
    <header className="flex justify-center h-16 pt-2 bg-zinc-800">
      <ul className="flex justify-between w-1/4">
        <li>
          <a href="https://myanimelist.net/anime/season" target="_blank">
            <MAL className=" fill-white  h-12" />
          </a>
        </li>
        <li>
          <a href="https://kitsu.io/explore/anime" target="_blank">
            <Kitsu className="mt-1 fill-white  h-9" />
          </a>
        </li>
        <li>
          <a href="https://anilist.co/search/anime/this-season" target="_blank">
            <AniList className="mt-1 h-9 fill-white" />
          </a>
        </li>
        {/* <li><FontAwesomeIcon icon={faSun}/></li> */}
      </ul>
    </header>
  );
};

export default Header;
