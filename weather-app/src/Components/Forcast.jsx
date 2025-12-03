
import large from '../assets/large.svg'
import sunny from '../assets/sunny.webp'
import drop from '../assets/drop.svg'
import overcast from '../assets/overcast.webp'
import partly from '../assets/partly.webp'
import snow from '../assets/snow.webp'
import drizzle from '../assets/drizzle.webp'
import storm from '../assets/storm.webp'
import rain from '../assets/rain.webp'
import { useState } from 'react'


function Forcast() {
 const [click, setClick] = useState(!false)
  


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
              <h1 className="text-3xl font-semibold">Berlin, Germany</h1>
              <p className="text-md opacity-80 pt-5">Tuesday, Aug 5, 2025</p>
            </div>

            <div className="flex  pl-87 ">
              <img src={sunny} alt="" className="w-20 animate-pulse" />
              <span className="text-6xl font-bold pt-5">68°</span>
            </div>
          </div>
        </div>

        {/* CONDITONS */}
        <div className="flex gap-6 -mt-5 text-white ">
          <div
            className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-3  grid gap-2 pr-25 "
          >
            <h1>Feels like</h1>
            <span className="text-2xl font-semibold">68°</span>
          </div>

          <div
            className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-3 pr-25  grid gap-2"
          >
            <h1>Humidity</h1>
            <span className="text-2xl font-semibold">46%</span>
          </div>

          <div
            className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-3 pr-25 grid gap-2"
          >
            <h1>Wind</h1>
            <span className="text-2xl font-semibold">14km/h</span>
          </div>

          <div
            className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-3 pr-25 grid gap-2"
          >
            <h1>Precipitation</h1>
            <span className="text-2xl font-semibold">0mm</span>
          </div>
        </div>

        {/* DAILY FORCAST */}
        <div className="mt-2">
          <h1 className="text-white text-base font-semibold pb-3">
            Daily Forcast
          </h1>
          <div className="flex gap-5.5 text-white">
            <div
              className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-4  grid  gap-4  "
            >
              <h1>Tue</h1>
              <img src={rain} alt="" className="w-10" />
              <div className="flex gap-3 text-xs">
                <span>57°</span>
                <span>68°</span>
              </div>
            </div>

            <div
              className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-4  grid  gap-4  "
            >
              <h1>Wed</h1>
              <img src={snow} alt="" className="w-10" />
              <div className="flex gap-3 text-xs">
                <span>57°</span>
                <span>68°</span>
              </div>
            </div>

            <div
              className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-4  grid  gap-4  "
            >
              <h1>Thurs</h1>
              <img src={storm} alt="" className="w-10" />
              <div className="flex gap-3 text-xs">
                <span>57°</span>
                <span>68°</span>
              </div>
            </div>

            <div
              className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-4  grid  gap-4  "
            >
              <h1>Fri</h1>
              <img src={sunny} alt="" className="w-10" />
              <div className="flex gap-3 text-xs">
                <span>57°</span>
                <span>68°</span>
              </div>
            </div>

            <div
              className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-4  grid  gap-4  "
            >
              <h1>Sat</h1>
              <img src={partly} alt="" className="w-10" />
              <div className="flex gap-3 text-xs">
                <span>57°</span>
                <span>68°</span>
              </div>
            </div>

            <div
              className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-4  grid  gap-4  "
            >
              <h1>Sun</h1>
              <img src={overcast} alt="" className="w-10" />
              <div className="flex gap-3 text-xs">
                <span>57°</span>
                <span>68°</span>
              </div>
            </div>

            <div
              className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-4  grid  gap-4  "
            >
              <h1>Mon</h1>
              <img src={rain} alt="" className="w-10" />
              <div className="flex gap-3 text-xs">
                <span>57°</span>
                <span>68°</span>
              </div>
            </div>

            <div
              className=" text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-4  grid  gap-4  "
            >
              <h1>Tue</h1>
              <img src={sunny} alt="" className="w-10" />
              <div className="flex gap-3 text-xs">
                <span>57°</span>
                <span>68°</span>
              </div>
            </div>
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
              className="cursor-pointer"
              onClick={() => setClick(!click)}
            />
          </div>
        </div>

        <div
          className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex gap-2">
            <img src={overcast} alt="" className="w-8" />
            <p>3 PM</p>
          </div>
          <span className="text-base font-light">68°</span>
        </div>

        <div
          className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex gap-2">
            <img src={partly} alt="" className="w-8" />
            <p>4 PM</p>
          </div>
          <span className="text-base font-light">68°</span>
        </div>

        <div
          className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex gap-2">
            <img src={sunny} alt="" className="w-8" />
            <p>5 PM</p>
          </div>
          <span className="text-base font-light">68°</span>
        </div>

        <div
          className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex gap-2">
            <img src={snow} alt="" className="w-8" />
            <p>6 PM</p>
          </div>
          <span className="text-base font-light">68°</span>
        </div>

        <div
          className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex gap-2">
            <img src={storm} alt="" className="w-8" />
            <p>7 PM</p>
          </div>
          <span className="text-base font-light">68°</span>
        </div>

        <div
          className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex gap-2">
            <img src={drizzle} alt="" className="w-8" />
            <p>8 PM</p>
          </div>
          <span className="text-base font-light">68°</span>
        </div>

        <div
          className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex gap-2">
            <img src={sunny} alt="" className="w-8" />
            <p>9 PM</p>
          </div>
          <span className="text-base font-light">68°</span>
        </div>

        <div
          className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-3 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        >
          <div className="flex gap-2">
            <img src={rain} alt="" className="w-8" />
            <p>10 PM</p>
          </div>
          <span className="text-base font-light">68°</span>
        </div>

        {/* DROPDOWN             */}
        {click && (
          <div className="absolute p-2 pr-2 w-50 right-4 backdrop-blur-xl bg-white/10 border border-white/20   shadow-lg  top-16 rounded-xl z-50 text-base ">
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