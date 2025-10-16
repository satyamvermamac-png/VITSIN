import React from 'react'

export default function About(){
  return (
    <section className="mt-6 bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold">About Vitsin</h2>
      <p className="mt-4 text-earth-600">Vitsin produces fortified premixes, dehydrated products and veterinary formulations focused on quality and nutrition. We work with modern processing and traditional values to deliver safe, effective, and affordable nutrition solutions.</p>
      <ul className="mt-4 list-disc list-inside text-earth-600">
        <li>Fortified products: premixes, fortified salts</li>
        <li>Dehydrated powders: fruit & vegetable powders</li>
        <li>Veterinary formulations for livestock health</li>
      </ul>
    </section>
  )
}
