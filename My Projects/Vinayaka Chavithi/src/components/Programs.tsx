import React from 'react'

const programs=[
  {title:'Classical Dance',desc:'Bharatanatyam and other forms'},
  {title:'Folk Dance',desc:'Traditional folk performances'},
  {title:'Music',desc:'Carnatic & devotional music'},
  {title:'Bhajans',desc:'Community bhajans and bhajans sessions'},
  {title:'Kids Performances',desc:'Children shows and competitions'}
]

export default function Programs(){
  return (
    <section id="programs" className="mt-8">
      <h3 className="text-2xl font-semibold">Cultural Programs</h3>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {programs.map(p=> (
          <div key={p.title} className="bg-cream p-4 rounded shadow">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm text-slate-600">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
