const Search = ({ q, setQ }: { q: string, setQ: (input: string) => void }) => {
  return (
    <div className="flex justify-center my-12 text-white mt-28">
      <input
        type="text"
        placeholder="Search for anime or studio here..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="bg-zinc-800 outline-none border-2 border-zinc-700 rounded-xl px-6 py-3 block w-1/3"
      />
    </div>
  );
};

export default Search;
