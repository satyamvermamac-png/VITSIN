import React, { useState } from 'react'

export default function Products({ products, onAdd, route, setRoute }){
  const category = route.split(':')[1] || 'All'
  const cats = ['All', ...new Set(products.map(p=>p.category))]
  const list = products.filter(p=> category==='All' || p.category===category)
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Products {category!=='All' && `— ${category}`}</h2>
        <div className="flex gap-2">
          {cats.map(c=> <button key={c} onClick={()=>setRoute('products:'+c)} className={`px-3 py-1 rounded ${c===category? 'bg-sage-600 text-earth-50':'bg-sage-100 text-sage-800'}`}>{c}</button>)}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {list.map(p=> (
          <div key={p.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-earth-500 mt-1">{p.category}</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-bold">₹{p.price}</div>
                <button onClick={()=>onAdd(p)} className="px-3 py-1 bg-sage-600 text-earth-50 rounded">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
