import React from 'react'
import deviMathaImg from '../assets/deviMatha.png'
import tgBathukammaImg from '../assets/tgBathukamma.png'
import koluvuImg from '../assets/koluvu.png'
import dandiyaImg from '../assets/dandiya.png'
import parayanamImg from '../assets/parayanam.png'
import communityImg from '../assets/communitySeva.png'



const items = [
  { title: 'Devi Matha Darshan', desc: 'A devotional welcome to Devi Matha and the spirit of Sharannavaratri.', image: deviMathaImg },
  { title: 'Bathukamma Alankarana', desc: 'Celebrate Telangana heritage through flowers, songs and shared tradition.', image: tgBathukammaImg },
  { title: 'Dasara Ammavari Koluvu', desc: 'Gather for Devi darshan, koluvu and auspicious Dasara observance.', image: koluvuImg },
  { title: 'Kolata & Dandiya Raas', desc: 'An energetic evening of folk dance, rhythm and community joy.', image: dandiyaImg },
  { title: 'Lalitha Sahasranamam', desc: 'Join the LGP family for collective prayer and devotional chanting.', image: parayanamImg },
  { title: 'Seva & Community Gathering', desc: 'Celebrate together through volunteer service, prasadam and fellowship.', image: communityImg }
]

export default function DurgaHighlights(){
  return (
    <section id="durga-highlights" className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="text-2xl font-semibold text-maroon">Devi Sharannavaratri Highlights</h3>
          <p className="mt-1 text-sm text-slate-600">Bathukamma • Dasara • Devotion • Community</p>
        </div>
        <span className="text-sm font-semibold text-saffron">10 - 21 October 2026</span>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <article
            key={item.title}
            className={`relative min-h-[190px] overflow-hidden rounded shadow hover:-translate-y-1 transition-transform ${item.image ? 'text-white' : 'bg-gradient-to-br from-rose-50 via-orange-50 to-amber-100 text-slate-800'}`}
          >
            {item.image && <>
              <img src={item.image} alt="Durga Matha celebration" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-maroon/25 to-black/10" aria-hidden="true" />
            </>}
            <div className="relative z-10 flex min-h-[190px] flex-col justify-end p-5" style={item.image ? { textShadow: '0 1px 3px rgba(0,0,0,.7)' } : undefined}>
              {/* <div className="mb-auto text-2xl" aria-hidden="true">{['🌺', '🌼', '🪔', '💃', '🙏', '🤝'][index]}</div> */}
              <h4 className="font-semibold">{item.title}</h4>
              <p className={`mt-1 text-sm ${item.image ? 'text-white/90' : 'text-slate-600'}`}>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
