import React from 'react'
import { siteConfig } from '../data/siteConfig'

const tirupathiImg = new URL('../assets/tirupathi.png', import.meta.url).href

export default function Footer(){
  return (
    <footer className="mt-12 py-10 rounded-lg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Mobile: keep original gradient and white text; position per mock */}
        <div className="md:hidden text-white rounded-lg overflow-hidden" style={{background:'linear-gradient(90deg,var(--maroon),var(--saffron))', margin: '0 -1.5rem'}}>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">{siteConfig.associationName}</div>
              <div className="text-sm font-semibold">© {new Date().getFullYear()} {siteConfig.associationName}</div>
            </div>
            <div className="flex flex-col items-center mt-6 gap-2">
              <div className="text-base">Developed By: <span className="font-semibold text-amber-200">Vishnu Choutapelly</span></div>
              <div className="text-sm">For Orders: <a className="underline text-amber-100 font-semibold" href="tel:+919014249898">+91-9014249898</a></div>
            </div>
          </div>
        </div>

        {/* Desktop / larger screens: gradient footer with image on the right */}
        <div className="hidden md:block text-white rounded-lg overflow-hidden" style={{background:'linear-gradient(90deg,var(--maroon),var(--saffron))'}}>
          <div className="py-10 px-6">
            <div className="flex items-center justify-between gap-6">
              <div className="flex-1">
                <div className="font-semibold text-lg">{siteConfig.associationName}</div>
                <div className="text-sm mt-1">Made with devotion & community spirit</div>
                <div className="mt-4 text-sm">© {new Date().getFullYear()} {siteConfig.associationName}</div>
                <div className="mt-3">Developed By: <span className="font-semibold text-amber-200">Vishnu Choutapelly</span></div>
                <div className="mt-1">For Orders: <a className="underline text-amber-100" href="tel:+919014249898">+91-9014249898</a></div>
              </div>
              <div className="w-40 h-40 flex-shrink-0 rounded overflow-hidden bg-white/10 p-2 shadow-inner">
                <img src={tirupathiImg} alt="Tirupathi" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
