import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Products from './pages/Products'
import About from './pages/About'
import Cart from './pages/Cart'

const PRODUCTS = [
  { id: 'premix-wheat', title: 'Premix for Wheat Flour', category: 'Fortified Products', price: 1200, img: '/images/premix-wheat.svg' },
  { id: 'premix-rice', title: 'Premix for Fortified Rice Kernels', category: 'Fortified Products', price: 900, img: '/images/premix-rice.svg' },
  { id: 'black-salt', title: 'Fortified Black Salt', category: 'Fortified Products', price: 150, img: '/images/black-salt.svg' },
  { id: 'double-salt', title: 'Double Fortified Salt', category: 'Fortified Products', price: 200, img: '/images/double-salt.svg' },
  { id: 'calvit', title: 'CALVIT + (1L)', category: 'Veterinary Products', price: 500, img: '/images/calvit.svg' },
  { id: 'hvit', title: 'H-VIT UDDERMAXX+ (500ML)', category: 'Veterinary Products', price: 250, img: '/images/hvit.svg' },
  { id: 'lemon-peel', title: 'Lemon Peel Powder', category: 'Dehydrated Products', price: 80, img: '/images/lemon-peel.svg' },
  { id: 'beetroot', title: 'Beetroot Powder', category: 'Dehydrated Products', price: 90, img: '/images/beetroot.svg' },
  { id: 'onion-powder', title: 'Onion Powder', category: 'Dehydrated Products', price: 110, img: '/images/onion-powder.svg' }
]

export default function App(){
  const [route, setRoute] = useState('home')
  const [cart, setCart] = useState(()=> JSON.parse(localStorage.getItem('vitsin_cart')||'[]'))

  useEffect(()=> localStorage.setItem('vitsin_cart', JSON.stringify(cart)), [cart])

  function addToCart(product){
    setCart(prev=>{
      const found = prev.find(p=>p.id===product.id)
      if(found) return prev.map(p=> p.id===product.id ? {...p, qty: p.qty+1} : p)
      return [...prev, {...product, qty:1}]
    })
  }
  function updateQty(id, qty){ setCart(prev => prev.map(p=> p.id===id?{...p, qty}:p)) }
  function removeItem(id){ setCart(prev => prev.filter(p=> p.id!==id)) }
  function clear(){ setCart([]) }

  return (
    <div className="min-h-screen bg-earth-50 text-earth-800">
      <Navbar onNav={setRoute} cartCount={cart.reduce((s,i)=>s+i.qty,0)} />
      <main className="max-w-6xl mx-auto p-4">
        {route==='home' && (
          <div>
            <Carousel />
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Categories</h2>
              <div className="flex gap-3 flex-wrap">
                {[...new Set(PRODUCTS.map(p=>p.category))].map(c=> (
                  <button key={c} onClick={()=>setRoute('products:'+c)} className="px-4 py-2 rounded-full bg-sage-200 text-sage-900">{c}</button>
                ))}
              </div>
            </section>
          </div>
        )}
        {route.startsWith('products') && <Products products={PRODUCTS} onAdd={addToCart} route={route} setRoute={setRoute} />}
        {route==='about' && <About />}
        {route==='cart' && <Cart items={cart} updateQty={updateQty} removeItem={removeItem} clear={clear} />}
      </main>
      <footer className="mt-12 bg-earth-600 text-earth-50 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">© {new Date().getFullYear()} Vitsin — Natural & Fortified Nutrition</div>
      </footer>
    </div>
  )
}
