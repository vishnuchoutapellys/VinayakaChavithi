import React from 'react'
import { siteConfig } from '../data/siteConfig'

const sponsorshipItems = [
  '🌺 Flower Decoration',
  '💐 Garlands',
  '💡 Lighting',
  '🪔 Pooja Saman',
  '🌿 Kumkum & Turmeric',
  '🕯️ Camphor',
  '🥥 Coconuts',
  '🍚 Daily Prasadams (both, morning or evening)',
  '🍚 Nimajjan Day Prasadams',
  '🥻 Sarees for 1 day or 9 days as per Avathar Alankaran schedule',
  '👚 Blouse Pieces',
  '🎁 Return Gifts',
  '📚 Slates, books, slate pencils and pens',
  '🔊 Sound System (boxes and mic set)',
  '🚗 Nimajjan Vehicle and Decoration',
  '🌸 Any other item required for the celebrations'
]

export default function DurgaDonation(){
  const whatsappDigits = siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')
  const whatsappMessage = 'Hello, I would like to sponsor an item for the Durga matha,Dasara & Bathukamma celebrations. Please guide me about the available sponsorship items.'
  const whatsappUrl = `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="durga-donation" className="mt-8 rounded-lg border border-amber-200 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-100 p-5 shadow-lg md:p-7">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-maroon">🌸 Durga Matha,Dasara &amp; Bathukamma Sponsorship 🌸</h3>
        <p className="mx-auto mt-3 max-w-3xl text-slate-700">
          We welcome devotees and well-wishers to sponsor any of the following items for this year&apos;s Dasara &amp; Bathukamma celebrations.
        </p>
      </div>

      <div className="mx-auto mt-5 grid max-w-4xl gap-2 sm:grid-cols-2">
        {sponsorshipItems.map(item => (
          <div key={item} className="rounded-md border border-amber-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-800 shadow-sm">
            {item}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-6 max-w-3xl text-center text-slate-700">
        <p>Your generous support will help us conduct the celebrations with devotion, joy and togetherness. Every contribution, big or small, is deeply appreciated. 🙏</p>
        <p className="mt-3 font-semibold text-maroon">Please contact the organising committee for sponsoring any item.</p>
        <p className="mt-1 text-sm text-slate-600">— LGPOCC</p>
        {whatsappDigits && <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-md bg-maroon px-5 py-3 font-semibold text-white shadow transition hover:bg-saffron focus:outline-none focus:ring-4 focus:ring-amber-200">Contact Organising Committee</a>}
      </div>
    </section>
  )
}
