import logo from '../assets/logo.svg'
import units from '../assets/units.svg'
import drop from '../assets/drop.svg'

import React, { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(null)
    

  return (
    <nav className="flex justify-between pt-10 px-20 text-white">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-2 backdrop-blur-xl bg-white/10 border border-white/20 py-2 px-3 shadow-lg transition-all duration-400 hover:scale-105  rounded-sm ">
        <img src={units} alt="" className="w-5" />
        <p>units</p>
        <img
          src={drop}
          alt=""
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute p-4 pr-2 w-50 right-18 backdrop-blur-xl bg-white/10 border border-white/20   shadow-lg transition-all duration-400 top-23  rounded-xl z-50  ">
          {/* TEMPERATURE */}
          <p className="text-gray-400 text-sm">Temperature</p>
          <div className="  text-white text-base border-b border-gray-500 ">
            <div
              className="flex gap-1.5 hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>Celsius </h1>
              <span>(°C)</span>
            </div>

            <div
              className="flex gap-1.5 mb-1.5  hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1  "
            >
              <h1>Fahrenheit</h1>
              <span>(°F)</span>
            </div>
          </div>

          {/* WIND SPEED */}
          <p className="text-gray-400 text-sm mt-2">Wind Speed</p>
          <div className="  text-white text-base border-b border-gray-500 ">
            <div
              className=" hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>km/h </h1>
            </div>

            <div
              className=" mb-1.5  hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1  "
            >
              <h1>mph</h1>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-2">Precipitation</p>
          <div className="  text-white text-base  ">
            <div
              className=" hover:backdrop-blur-xl hover:bg-blue-500/10 hover:border hover:border-blue-200/20 
            hover:shadow-lg hover:rounded-sm hover:p-1"
            >
              <h1>Millimeters (mm) </h1>
            </div>

            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar