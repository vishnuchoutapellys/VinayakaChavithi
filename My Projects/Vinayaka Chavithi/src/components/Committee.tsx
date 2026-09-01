import React from 'react'
import { siteAssets, siteConfig } from '../data/siteConfig'

export default function Committee(){
  const members = siteAssets.committeeMembers
  return (
    <section id="committee" className="mt-8">
      <h3 className="text-2xl font-semibold">Committee / Organizers</h3>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
        {members.map(m=> (
          <div key={m.name} className="bg-white p-4 rounded text-center shadow">
            <img src={m.img} alt="" aria-hidden className="w-24 h-24 mx-auto rounded-full object-cover" loading="lazy"/>
            <div className="font-semibold mt-2">{m.name}</div>
            {m.role && <div className="text-sm text-slate-600">{m.role}</div>}
            {m.phone && (
              <div className="mt-2">
                <a href={`tel:${m.phone.replace(/\s+/g,'')}`} className="inline-flex items-center gap-2 text-sm text-saffron hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12 1.2.36 2.37.72 3.5a2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.76-1.76a2 2 0 0 1 2.11-.45c1.13.36 2.3.6 3.5.72A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>{m.phone}</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
