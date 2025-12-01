
import search from '../assets/search.svg'


function Search() {
  return (
    
    <div className=" pt-15 flex justify-center gap-3">
      <div className="backdrop-blur-lg bg-black/20 border border-white/10 shadow-lg rounded-xl p-6 flex items-center gap-2  px-3 py-2 w-full max-w-md transition-all duration-500 ease-out hover:scale-[1.03]">
        <img src={search} alt="" />
        <input
          type="text"
          placeholder="Search for a place..."
          className="bg-transparent outline-none text-gray-200 placeholder-gray-400 w-full"
        />
      </div>
      <button
        className="backdrop-blur-xl bg-blue-500/10 border border-blue-200/20 
            shadow-lg rounded-2xl p-6 px-3 py-2 text-white cursor-pointer transition-all duration-400 hover:scale-105"
      >
        search
      </button>
    </div>
  );
}

export default Search