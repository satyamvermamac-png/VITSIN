import React from 'react'

export default function Cart({ items, updateQty, removeItem, clear }){
  const subtotal = items.reduce((s,i)=> s + i.price*i.qty, 0)
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      {items.length===0 ? <p className="mt-4">Cart is empty</p> : (
        <div className="mt-4 space-y-4">
          {items.map(it=> (
            <div key={it.id} className="flex items-center gap-4 bg-white p-4 rounded shadow-sm">
              <img src={it.img} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <div className="font-semibold">{it.title}</div>
                <div className="text-sm text-earth-500">₹{it.price} x <input className="w-16 border rounded px-2" type="number" min="1" value={it.qty} onChange={(e)=>updateQty(it.id, Number(e.target.value))} /></div>
              </div>
              <div className="text-right">
                <div className="font-bold">₹{it.price*it.qty}</div>
                <button className="text-sm text-red-600 mt-2" onClick={()=>removeItem(it.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="bg-white p-4 rounded shadow-sm flex items-center justify-between">
            <div className="font-semibold">Subtotal: ₹{subtotal}</div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-sage-600 text-earth-50 rounded" onClick={()=>alert('Demo checkout — integrate payment gateway for production')}>Checkout</button>
              <button className="px-4 py-2 border rounded" onClick={clear}>Clear</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
