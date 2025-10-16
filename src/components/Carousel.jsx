import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  { img: '/images/hero-1.svg', title: 'Nutrition-first premixes', subtitle: 'Quality fortification for food systems' },
  { img: '/images/hero-2.svg', title: 'Dehydrated & Natural', subtitle: 'Preserving flavour and nutrition' },
  { img: '/images/hero-3.svg', title: 'Veterinary Solutions', subtitle: 'Health for animals & people' }
]

export default function Carousel(){
  const [i, setI] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setI(s=> (s+1)%slides.length), 4500)
    return ()=> clearInterval(t)
  },[])
  return (
    <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.8}} className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage:`url(${slides[i].img})`}}>
            <div className="bg-gradient-to-r from-earth-900/40 to-transparent h-full flex items-center">
              <div className="max-w-2xl p-6 text-earth-50">
                <h2 className="text-2xl md:text-4xl font-bold">{slides[i].title}</h2>
                <p className="mt-2">{slides[i].subtitle}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
