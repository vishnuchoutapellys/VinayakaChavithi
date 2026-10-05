import React from 'react'

const programs=[
  {title:'Devi Matha Alankarana & Pooja',desc:'Devotional decoration, daily pooja and aarti for Devi Matha'},
  {title:'Bathukamma Celebrations',desc:'Floral Bathukamma arrangements, songs and community gathering'},
  {title:'Dasara Ammavari Koluvu',desc:'Traditional Devi darshan and Dasara devotional observance'},
  {title:'Kolata & Dandiya Raas',desc:'Festive folk dance for families and community members'},
  {title:'Lalitha Sahasranamam',desc:'Collective devotional chanting and prayer'},
  {title:'Traditional Rangoli & Floral Art',desc:'Community rangoli and Bathukamma flower decoration activity'},
  {title:'Classical Dance',desc:'Bharatanatyam and other forms'},
  {title:'Folk Dance',desc:'Traditional folk performances'},
  // {title:'Music',desc:'Carnatic & devotional music'},
  {title:'Bhajans',desc:'Bhajanas at Lord Ganesh Mandap.'},
  {title:'Kids Performances',desc:'Children shows and competitions'},
  // {title:'Hanuman Chalisa',desc:'Devotional prayer and recitation'}

]

export default function Programs(){
  return (
    <section id="programs" className="mt-8">
      <h3 className="text-2xl font-semibold">Cultural Programs</h3>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {programs.map(p=> (
          <div key={p.title} className="p-4 rounded shadow-sm hover:shadow-md transition-shadow" style={{ backgroundColor: 'bisque', border: '1px solid black' }}>
            <div className="font-semibold text-slate-800">{p.title}</div>
            <div className="text-sm text-slate-600">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
