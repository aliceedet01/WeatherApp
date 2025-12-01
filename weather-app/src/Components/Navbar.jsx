import logo from '../assets/logo.svg'
import units from '../assets/units.svg'
import drop from '../assets/drop.svg'

import React from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between pt-10 px-20 text-white">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-2 backdrop-blur-xl bg-white/10 border border-white/20 py-2 px-3 shadow-lg transition-all duration-400 hover:scale-105  rounded-sm cursor-pointer">
        <img src={units} alt="" className="w-5" />
        <p>units</p>
        <img src={drop} alt="" />
      </div>
    </nav>
  );
}

export default Navbar