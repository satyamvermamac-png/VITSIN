import React from 'react'

export default function Navbar({ onNav, cartCount }){
  return (
    <header className="bg-earth-800 text-earth-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=>onNav('home')}>
          <div className="w-10 h-10 rounded-full bg-sage-600 flex items-center justify-center font-bold">V</div>
          <div>
            <div className="font-bold">VITSIN</div>
            <div className="text-xs text-earth-200">Nutrition & Fortification</div>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <button onClick={()=>onNav('home')} className="hover:underline">Home</button>
          <button onClick={()=>onNav('products:All')} className="hover:underline">Products</button>
          <button onClick={()=>onNav('about')} className="hover:underline">About</button>
          <button onClick={()=>onNav('cart')" className="relative bg-sage-200 text-sage-900 px-3 py-1 rounded">{`Cart (${cartCount})`}</button>
        </nav>
      </div>
    </header>
  )
}
