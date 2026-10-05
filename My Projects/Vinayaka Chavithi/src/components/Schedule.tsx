import React from 'react'

// Resolve local placeholder image for the circular icons

let circleImg = ''
try{
  circleImg = new URL('../assets/sthapana.jpg', import.meta.url).href
}catch{}

let poojaImg = ''
try{
  poojaImg = new URL('../assets/pooja.jpeg', import.meta.url).href
}catch{}

let culturalevent = ''
try{
  culturalevent = new URL('../assets/culturalevent.webp', import.meta.url).href
}catch{}

let nimarjan = ''
try{
  nimarjan = new URL('../assets/nimarjan.jpg', import.meta.url).href
}catch{}

let agamanImg = ''
try{
  agamanImg = new URL('../assets/agaman.jpg', import.meta.url).href
}catch{}

const events = [
  {date:'12/09/2026',title:'Ganesh Maharaj Aagaman',time:'Morning 11:15 AM • Evening 5:00 PM',desc:'Morning 11:15AM\nRaata/Mandap Modati Stamba, \n\nEvening 5PM\nMaharaaj Aagaman at LGP’s Vinayaka Mandapam', image: agamanImg},
  {date:'14/09/2026',title:'Ganesh Sthapana',time:'Evening',desc:'Lord Ganesha’s Pranaprathista and Pooja ceremony', image: circleImg},
  {date:'15/09/2026 - 19/09/2026',title:'Daily Pooja',time:'Morning 9:00 AM & Evening 7:00 PM',desc:'Daily rituals and aarti', image: poojaImg},
  {date:'15/09/2026 - 19/09/2026',title:'Cultural Evening',time:'6:00 PM',desc:'Music and dance performances', image: culturalevent},
  {date:'20/09/2026',title:'Grand Annadanam',time:'Afternoon',desc:'Community annadanam and cultural programs', image: circleImg},
  {date:'20/09/2026',title:'Ganesh Nimarjanam',time:'Evening',desc:'Immersion procession', image: nimarjan}
]

const deviSchedule = [
  ['10-10-2026', '—', 'Engilipoola Bathukamma'],
  ['11-10-2026', 'Sri Bala Tripura Sundari Devi', 'Atukula Bathukamma'],
  ['12-10-2026', 'Sri Gayatri Devi', 'Muddapappu Bathukamma'],
  ['13-10-2026', 'Sri Annapurna Devi', 'Naanabiyyam Bathukamma'],
  ['14-10-2026', 'Sri Maha Chandi Devi', 'Ata Bathukamma'],
  ['15-10-2026', 'Sri Lalitha Tripura Sundari Devi', 'Aligina Bathukamma'],
  ['16-10-2026', 'Sri Saraswathi Devi', 'Vepakayala Bathukamma'],
  ['17-10-2026', 'Sri Mahalakshmi Devi', 'Vennamuddala Bathukamma'],
  ['18-10-2026', 'Sri Durga Devi', 'Sadulala Bathukamma'],
  ['19-10-2026', 'Sri Mahishasuramardini Devi', '—'],
  ['20-10-2026', 'Sri Rajarajeshwari Devi', '—']
]

export default function Schedule(){
  return (
    <section id="schedule" className="mt-8 scroll-mt-28">
      <h3 className="text-2xl font-semibold text-maroon">Event Schedule</h3>
      <div className="mt-6 grid gap-6">
        <div className="overflow-x-auto rounded-lg border border-orange-200 bg-white shadow">
          <div className="min-w-[640px]">
            <div className="bg-maroon px-4 py-3 text-center text-lg font-semibold text-amber-100">
              Devi Sharannavaratri • Bathukamma • Dasara
            </div>
            <table className="w-full border-collapse text-sm">
              <caption className="sr-only">Important events from 10th to 20th October 2026</caption>
              <thead className="bg-emerald-900 text-white">
                <tr><th className="border border-emerald-700 px-3 py-2 text-left">Date</th><th className="border border-emerald-700 px-3 py-2 text-left">Alankarana</th><th className="border border-emerald-700 px-3 py-2 text-left">Bathukamma</th></tr>
              </thead>
              <tbody>
                {deviSchedule.map(([date, alankarana, bathukamma]) => (
                  <tr key={date} className="odd:bg-orange-50 even:bg-white">
                    <td className="border border-orange-200 px-3 py-2 font-semibold text-red-600">{date}</td>
                    <td className="border border-orange-200 px-3 py-2 text-blue-700">{alankarana}</td>
                    <td className="border border-orange-200 px-3 py-2 text-blue-700">{bathukamma}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {events.map((e,idx)=> (
          <div key={e.title} className="flex gap-4 items-start">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner">
                { (e.image || circleImg) ? (
                  <img src={e.image || circleImg} alt={e.title} loading="lazy" decoding="async" className="w-full h-full object-cover object-left md:object-center" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white font-bold" style={{background:'linear-gradient(135deg,#FF7043,#E0A800)'}}>
                    <div className="text-sm text-center">{e.date.split(' ')[0]}</div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 bg-white rounded shadow p-4" style={{borderLeft:'6px solid #E0A800'}}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-3">
                    <div className="font-semibold text-saffron">{e.title}</div>
                    <div className="text-xs md:text-sm text-slate-600">{e.date}</div>
                  </div>
                </div>
                <div className="text-sm text-slate-600">{e.time}</div>
              </div>
              <div className="text-sm text-slate-700 mt-2">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
