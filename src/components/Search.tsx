const Search = () => {
  return (
    <div className="flex justify-center gap-4 my-16 text-white">
      <input
        disabled
        type="text"
        placeholder="Search"
        className="border-2 border-white rounded-xl px-6 block bg-zinc-800 w-1/3"
      />
      <button className="text-white bg-zinc-800 hover:bg-zinc-700  p-3 rounded-xl transition">
        Search
      </button>
    </div>
  );
};

export default Search;
