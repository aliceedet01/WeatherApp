
import large from '../assets/large.svg'
import sunny from '../assets/sunny.webp'
import drop from '../assets/drop.svg'
import overcast from '../assets/overcast.webp'
import partly from '../assets/partly.webp'
import snow from '../assets/snow.webp'
import drizzle from '../assets/drizzle.webp'
import storm from '../assets/storm.webp'
import rain from '../assets/rain.webp'
import { useState, useEffect } from 'react'
import { getCityWeather, getOneCall } from "../Api/fetchWeather";

function Forcast() {
 const [click, setClick] = useState(false)
  const [current, setCurrent] = useState(null);
  const [daily, setDaily] = useState([]);
  const [hourly, setHourly] = useState([]);

  useEffect(() => {
    const load = async () => {
      const cityData = await getCityWeather("Berlin");

      setCurrent(cityData);

      const oneCall = await getOneCall(cityData.coord.lat, cityData.coord.lon);

     setDaily(oneCall.daily || []);
     setHourly(oneCall.hourly || []);
    };

    load();
  }, []);

  if (!current) return <div className="text-white">Loading...</div>;

  


  return (
    <div className="flex gap-5 mt-10">
      <div className="grid  gap-2 ml-25 ">
        {/* COUNTRY, DATE & TIME */}
        <div
          className="bg-no-repeat w-full h-80  pt-25 pl-8"
          style={{
            backgroundImage: `url(${large})`,
          }}
        >
          <div className=" flex  text-white">
            <div>
              <h1 className="text-3xl font-semibold">
                {current.name}, {current.sys.country}
              </h1>

              <p className="text-md opacity-80 pt-5">
                {new Date().toDateString()}
              </p>
            </div>

            <div className="flex  pl-87 ">
              <img
                src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                alt=""
                className="w-20 animate-pulse"
              />
              <span className="text-6xl font-bold pt-5">
                {Math.round(current.main.temp)}°
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-6 -mt-5 text-white ">
          <div
            className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-3  grid gap-2 pr-25 "
          >
            <h1>Feels like </h1>
            <span className="text-2xl font-semibold">
              {`${Math.round(current.main.feels_like)}°`}
            </span>
          </div>

          <div
            className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-3 pr-25  grid gap-2"
          >
            <h1>Humidity</h1>
            <span className="text-2xl font-semibold">
              {`${current.main.humidity}%`}
            </span>
          </div>

          <div
            className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-3 pr-25 grid gap-2"
          >
            <h1>Wind</h1>
            <span className="text-2xl font-semibold">
              {`${current.wind.speed} mph`}{" "}
            </span>
          </div>

          <div
            className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-3 pr-25 grid gap-2"
          >
            <h1>Precipitation</h1>
            <span className="text-2xl font-semibold">"0 in"mm</span>
          </div>
        </div>

        {/* DAILY FORCAST */}
        <div className="mt-2">
          <h1 className="text-white text-base font-semibold pb-3">
            Daily Forcast
          </h1>

          <div className="flex gap-5 text-white">
            {daily.length > 0 &&
              daily.map((d, i) => (
                <div
                  key={i}
                  className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
              shadow-md rounded-xl p-4  grid  gap-4  "
                >
                  <h1>
                    {new Date(d.dt * 1000).toLocaleDateString("en", {
                      weekday: "short",
                    })}
                  </h1>

                  <img
                    src={`https://openweathermap.org/img/wn/${d.weather[0].icon}.png`}
                    alt=""
                    className="w-10"
                  />

                  <p className="flex gap-3 text-xs">
                    {Math.round(d.temp.min)}° / {Math.round(d.temp.max)}°
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* HOURLY FORCAST */}
      <div className="backdrop-blur-lg bg-black/20 border border-white/10 shadow-lg w-120 h-150 rounded-xl mr-25 p-5 text-lg font-semibold text-white ">
        <div className="flex justify-between ">
          <h1>hourly forcast</h1>

          <div
            className="flex gap-2 text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-2 transition-all duration-400 hover:scale-103 "
          >
            <span>Tuesday</span>
            <img
              src={drop}
              alt=""
              className="cursor-pointer w-2.5"
              onClick={() => setClick(!click)}
            />
          </div>
        </div>

        {hourly.length > 0 &&
          hourly.map((h, i) => (
            <div
              className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div key={i} className="flex gap-2">
                <img
                  src={`https://openweathermap.org/img/wn/${h.weather[0].icon}.png`}
                  alt=""
                  className="w-8"
                />
                <span>
                  {" "}
                  {new Date(h.dt * 1000).toLocaleTimeString([], {
                    hour: "numeric",
                  })}
                </span>
              </div>
              <span className="text-base font-light">
                {Math.round(h.temp)}°
              </span>
            </div>
          ))}

        {/* DROPDOWN             */}
        {click && (
          <div className="absolute p-2 pr-2 w-50 right-4 backdrop-blur-xl bg-blue/60 border border-white/20   shadow-lg  top-16 rounded-xl  text-base ">
            <div
              className=" pb-2 hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>Monday </h1>
            </div>

            <div
              className="pb-2 hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>Tuesday </h1>
            </div>

            <div
              className="pb-2 hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>Wednesday </h1>
            </div>

            <div
              className="pb-2 hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>Thursday </h1>
            </div>

            <div
              className="pb-2 hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>Friday </h1>
            </div>

            <div
              className="pb-2 hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>Saturday </h1>
            </div>

            <div
              className="pb-2 hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>Sunday </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Forcast