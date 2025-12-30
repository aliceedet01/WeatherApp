
import searc from '../assets/searc.svg'
import { getCityWeather } from "../Api/fetchWeather";
import { useState } from 'react';



function Search() {
   const [weather, setWeather] = useState({});
   const [query, setQuery] = useState("");

  const search = async () => {
    const data = await getCityWeather(query);
    setWeather(data);
  };

  return (
    <div className="grid gap-2">
      <div className=" pt-15 flex justify-center gap-3">
        <div className="backdrop-blur-lg bg-black/20 border border-white/10 shadow-lg rounded-xl p-6 flex items-center gap-2  px-3 py-2 w-full max-w-md transition-all duration-500 ease-out hover:scale-[1.03]">
          <img src={searc} alt="" />
          <input
            type="text"
            placeholder="Search for a place..."
            className="bg-transparent outline-none text-gray-200 placeholder-gray-400 w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          className="backdrop-blur-xl bg-blue-500/10 border border-blue-200/20 
            shadow-lg rounded-2xl p-6 px-3 py-2 text-white cursor-pointer transition-all duration-400 hover:scale-105"
          onClick={search}
        >
          search
        </button>
      </div>
      {/* Weather Display */}

      {weather && weather.main && (
        <div className="flex gap-3 px3 py-2 text-white justify-center ml-107 mr-128 backdrop-blur-lg bg-black/20 border border-white/10 shadow-lg rounded-xl">
          <h2 className="text-2xl font-bold">{weather.name}</h2>
          <p className="text-xl">{weather.main?.temp}°C</p>
          <p className="text-lg">{weather.weather?.[0]?.description}</p>
        </div>
      )}
    </div>
  );
}

export default Search