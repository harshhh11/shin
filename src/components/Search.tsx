const Search = ({ q, setQ }: { q: string, setQ: (input: string) => void }) => {
  return (
    <div className="flex justify-center my-16 text-white">
      <input
        type="text"
        placeholder="Search for anime or studio here..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="shadow-lg outline-none rounded-xl border-2 border-zinc-700 px-6 py-3 block bg-zinc-800 w-1/3"
      />
    </div>
  );
};

export default Search;
