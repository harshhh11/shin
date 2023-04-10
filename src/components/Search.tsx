const Search = ({ q, setQ }: { q: string, setQ: (input: string) => void }) => {
  return (
    <div className="flex justify-center gap-4 my-16 text-white">
      <input
        type="text"
        placeholder="Search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="shadow-lg outline-none rounded-3xl px-6 py-3 block bg-zinc-800 w-1/3"
      />
      {/* <button className="text-white bg-zinc-800 hover:bg-zinc-700  p-3 rounded-xl transition">
        Search
      </button> */}
    </div>
  );
};

export default Search;
