import React from 'react'
import { siteConfig } from '../data/siteConfig'

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

        {/* Desktop / larger screens: original gradient footer */}
        <div className="hidden md:block text-white rounded-lg overflow-hidden" style={{background:'linear-gradient(90deg,var(--maroon),var(--saffron))'}}>
          <div className="py-10 px-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
              <div>
                <div className="font-semibold">{siteConfig.associationName}</div>
                <div className="text-sm">Made with devotion & community spirit</div>
              </div>
              <div className="text-sm text-center md:text-right">
                <div>© {new Date().getFullYear()} {siteConfig.associationName}</div>
                <div className="mt-1">Developed By: <span className="font-semibold">Vishnu Choutapelly</span></div>
                <div>For Orders: <a className="underline" href="tel:+919014249898">+91-9014249898</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
