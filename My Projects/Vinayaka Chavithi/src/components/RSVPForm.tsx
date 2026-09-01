import React, { useState } from 'react'
import { apiConfig, siteConfig } from '../data/siteConfig'

export default function RSVPForm(){
  const [open, setOpen] = useState(false)
  const [loading,setLoading]=useState(false)
  const [success,setSuccess]=useState<null|boolean>(null)
  const [form,setForm]=useState({name:'',apartment:'',phone:'',email:'',count:1,interest:'General Participation',message:''})

  const submit=async(e:React.FormEvent)=>{
    e.preventDefault()
    // basic validation
    if(!form.name||!form.phone){
      setSuccess(false)
      return
    }
    setLoading(true)
    try{
      const res = await fetch(`${apiConfig.apiBase}/api/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if(res.ok){
        setSuccess(true)
      } else {
        setSuccess(false)
      }
      try{
        if(siteConfig.contact && siteConfig.contact.whatsapp){
          const digits = siteConfig.contact.whatsapp.replace(/[^0-9]/g,'')
          const msg = `Hello, I am ${form.name}${form.apartment? ' (Apartment: '+form.apartment+')':''}. Phone: ${form.phone}. Email: ${form.email || '-'}; Participants: ${form.count}; Interested In: ${form.interest}; Message: ${form.message || '-'} -- I would like to RSVP / contribute for ${siteConfig.eventName} at ${siteConfig.placeName}.`;
          const href = `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`
          window.open(href, '_blank')
        }
      }catch(err){
        // ignore whatsapp open errors
      }
    }catch(err){
      setSuccess(false)
    }finally{
      setLoading(false)
    }
  }

  return (
    <section id="rsvp" className="mt-8">
      <div className="mt-4">
        <button
          className="w-full text-left flex items-center justify-between p-4 devotional-gradient text-white font-semibold rounded-md shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-200"
          aria-expanded={open}
          aria-controls="rsvp-panel"
          aria-label="Toggle RSVP form"
          onClick={()=>setOpen(v=>!v)}
        >
          <div className="text-left">
            <div className="font-semibold">Participation</div>
            <div className="text-sm text-amber-100">Click to open the RSVP form and participation options</div>
          </div>
          <svg className={`w-5 h-5 text-white transition-transform ${open? 'rotate-180':'rotate-0'}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div id="rsvp-panel" className={`mt-3 overflow-hidden transition-all duration-300 ${open? 'max-h-[2000px] opacity-100':'max-h-0 opacity-0'}`} style={{transitionProperty:'max-height, opacity'}}>
          <div className="bg-white p-4 rounded-md shadow-inner border">
            <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input aria-label="Name" placeholder="Name*" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="p-2 border rounded" />
              <input aria-label="Apartment" placeholder="Apartment / House No" value={form.apartment} onChange={e=>setForm({...form,apartment:e.target.value})} className="p-2 border rounded" />
              <input aria-label="Phone" placeholder="Phone*" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="p-2 border rounded" />
              <input aria-label="Email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="p-2 border rounded" />
              <input aria-label="Participants" type="number" min={1} placeholder="No. of Participants" value={form.count} onChange={e=>setForm({...form,count:Math.max(1,Number(e.target.value))})} className="p-2 border rounded" />
              <select aria-label="Interested In" value={form.interest} onChange={e=>setForm({...form,interest:e.target.value})} className="p-2 border rounded">
                <option>General Participation</option>
                <option>Volunteer</option>
                <option>Sponsorship</option>
                <option>Annadanam</option>
                <option>Pooja</option>
              </select>
              <textarea aria-label="Message" placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="p-2 md:col-span-2 border rounded" />
              <div className="md:col-span-2">
                <button type="submit" className="px-4 py-2 bg-saffron text-white rounded" disabled={loading}>{loading? 'Sending...':'Submit'}</button>
                {success===true && <div className="mt-2 text-green-600">Submitted — thank you!</div>}
                {success===false && <div className="mt-2 text-red-600">Please complete required fields.</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
