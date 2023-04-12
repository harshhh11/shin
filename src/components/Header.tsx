const Header = ({ season, year } : { season: string, year: number }) => {
  return (
    <header className="flex justify-center items-center hover:underline cursor-pointer text-xl h-16 bg-zinc-800">
      <h1 className='capitalize'>{season + " " + year}</h1>
    </header>
  );
};

export default Header;
