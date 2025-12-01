
import large from '../assets/large.svg'
import sunny from '../assets/sunny.webp'
import drop from '../assets/drop.svg'
import overcast from '../assets/overcast.webp'
import partly from '../assets/partly.webp'
import snow from '../assets/snow.webp'
import drizzle from '../assets/drizzle.webp'
import storm from '../assets/storm.webp'
import rain from '../assets/rain.webp'


function Forcast() {
  return (
    <div>
      <div className="flex  mt-10 ">
        <div
          className="bg-no-repeat w-full h-100  ml-25 pt-30 pl-8"
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

        <div className="backdrop-blur-lg bg-black/20 border border-white/10 shadow-lg w-120 h-140 rounded-xl mr-25 p-5 text-lg font-semibold text-white">
          <div className="flex justify-between">
            <h1>hourly forcast</h1>

            <div
              className="flex gap-2 text-sm backdrop-blur-xl bg-blue-100/10 border border-blue-100/30 
            shadow-md rounded-xl p-2 transition-all duration-400 hover:scale-103 cursor-pointer"
            >
              <span>Tuesday</span>
              <img src={drop} alt="" />
            </div>
          </div>

          <div
            className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-2.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex gap-2">
              <img src={overcast} alt="" className="w-8" />
              <p>3 PM</p>
            </div>
            <span className="text-base font-light">68°</span>
          </div>

          <div
            className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-2.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex gap-2">
              <img src={partly} alt="" className="w-8" />
              <p>4 PM</p>
            </div>
            <span className="text-base font-light">68°</span>
          </div>

          <div
            className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-2.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex gap-2">
              <img src={sunny} alt="" className="w-8" />
              <p>5 PM</p>
            </div>
            <span className="text-base font-light">68°</span>
          </div>

          <div
            className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-2.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex gap-2">
              <img src={snow} alt="" className="w-8" />
              <p>6 PM</p>
            </div>
            <span className="text-base font-light">68°</span>
          </div>

          <div
            className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-2.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex gap-2">
              <img src={storm} alt="" className="w-8" />
              <p>7 PM</p>
            </div>
            <span className="text-base font-light">68°</span>
          </div>

          <div
            className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-2.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex gap-2">
              <img src={drizzle} alt="" className="w-8" />
              <p>8 PM</p>
            </div>
            <span className="text-base font-light">68°</span>
          </div>

          <div
            className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-2.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex gap-2">
              <img src={sunny} alt="" className="w-8" />
              <p>9 PM</p>
            </div>
            <span className="text-base font-light">68°</span>
          </div>

          <div
            className="flex justify-between backdrop-blur-xl bg-blue-600/20 border border-blue-300/30 
            shadow-xl rounded-xl p-2 my-2.5 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex gap-2">
              <img src={rain} alt="" className="w-8" />
              <p>10 PM</p>
            </div>
            <span className="text-base font-light">68°</span>
          </div>
        </div>
      </div>



    </div>
  );
}

export default Forcast