import React, { useEffect, useRef, useState } from 'react'
import { durgaFestivalConfig } from '../data/siteConfig'
import { handleDonationClick } from './Donation'
import './DurgaNavaratriReveal.css'

const readRevealFlag = () => {
  try {
    return localStorage.getItem(durgaFestivalConfig.storageKey) === 'true'
  } catch {
    return false
  }
}

export default function DurgaNavaratriReveal() {
  const [open, setOpen] = useState(() => durgaFestivalConfig.showOnEveryVisit || !readRevealFlag())
  const [revealed, setRevealed] = useState(() => durgaFestivalConfig.showOnEveryVisit ? false : readRevealFlag())
  const [scratchPercent, setScratchPercent] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const panelRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const scratchingRef = useRef(false)
  const lastPointRef = useRef<{ x: number; y: number } | null>(null)

  const completeReveal = () => {
    setRevealed(true)
    try { localStorage.setItem(durgaFestivalConfig.storageKey, 'true') } catch { /* storage can be unavailable */ }
  }

  const closeExperience = () => {
    setOpen(false)
    window.setTimeout(() => triggerRef.current?.focus(), 0)
  }

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeExperience()
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])')
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!open || revealed) return
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d', { willReadFrequently: true })
    if (!context) return

    const setupCanvas = () => {
      const bounds = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.max(1, Math.floor(bounds.width * ratio))
      canvas.height = Math.max(1, Math.floor(bounds.height * ratio))
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      context.globalCompositeOperation = 'source-over'

      const background = context.createLinearGradient(0, 0, bounds.width, bounds.height)
      background.addColorStop(0, '#6f0b18')
      background.addColorStop(0.48, '#a5261b')
      background.addColorStop(1, '#d88b1c')
      context.fillStyle = background
      context.fillRect(0, 0, bounds.width, bounds.height)

      context.globalAlpha = 0.22
      context.strokeStyle = '#ffd979'
      context.lineWidth = 1
      for (let radius = 36; radius < Math.max(bounds.width, bounds.height); radius += 36) {
        context.beginPath()
        context.arc(bounds.width / 2, bounds.height / 2, radius, 0, Math.PI * 2)
        context.stroke()
      }
      context.globalAlpha = 1
      context.globalCompositeOperation = 'destination-out'
    }

    setupCanvas()
    const resizeObserver = new ResizeObserver(setupCanvas)
    resizeObserver.observe(canvas)
    return () => resizeObserver.disconnect()
  }, [open, revealed])

  const measureScratch = () => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { willReadFrequently: true })
    if (!canvas || !context) return
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data
    let remaining = 0
    const stride = 16
    for (let index = 3; index < pixels.length; index += stride) if (pixels[index] > 8) remaining++
    const total = Math.ceil(pixels.length / stride)
    const percent = Math.max(0, Math.min(1, 1 - remaining / total))
    setScratchPercent(percent)
    if (percent >= durgaFestivalConfig.scratchThreshold) completeReveal()
  }

  const scratchAt = (event: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const bounds = canvas.getBoundingClientRect()
    const point = { x: event.clientX - bounds.left, y: event.clientY - bounds.top }
    const context = canvas.getContext('2d')
    if (!context) return
    const previous = lastPointRef.current || point
    context.lineCap = 'round'
    context.lineJoin = 'round'
    context.lineWidth = Math.max(42, Math.min(76, bounds.width * 0.075))
    context.beginPath()
    context.moveTo(previous.x, previous.y)
    context.lineTo(point.x, point.y)
    context.stroke()
    context.beginPath()
    context.arc(point.x, point.y, context.lineWidth / 2, 0, Math.PI * 2)
    context.fill()
    lastPointRef.current = point
    if (frameRef.current === null) {
      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null
        measureScratch()
      })
    }
  }

  const onPointerDown = (event: React.PointerEvent<HTMLCanvasElement>) => {
    scratchingRef.current = true
    lastPointRef.current = null
    event.currentTarget.setPointerCapture(event.pointerId)
    scratchAt(event)
  }

  const onPointerMove = (event: React.PointerEvent<HTMLCanvasElement>) => {
    if (scratchingRef.current) scratchAt(event)
  }

  const stopScratching = () => {
    scratchingRef.current = false
    lastPointRef.current = null
  }

  return (
    <>
      {!open && (
        <button
          ref={triggerRef}
          className="durga-reopen"
          onClick={handleDonationClick}
          aria-label="Donate to support our celebration"
        >💛 <span>Donate</span>
        </button>
      )}

      {open && (
        <div className="durga-overlay" role="presentation">
          <div ref={panelRef} className="durga-panel" role="dialog" aria-modal="true" aria-labelledby="durga-title">
            <button ref={closeRef} className="durga-close" onClick={closeExperience} aria-label="Close Durga Matha celebration">×</button>
            <div className="durga-poster" aria-describedby={!revealed ? 'durga-instructions' : undefined}>
              {durgaFestivalConfig.posterImage ? (
                <img src={durgaFestivalConfig.posterImage} alt={`${durgaFestivalConfig.title} poster`} />
              ) : (
                <div className="durga-poster-placeholder" role="img" aria-label="Devi celebration poster placeholder">
                  <span>Poster image slot</span>
                  <small>Add the supplied Durga poster to reveal it here.</small>
                </div>
              )}
              {!revealed && <canvas
                ref={canvasRef}
                className="durga-scratch-canvas"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={stopScratching}
                onPointerCancel={stopScratching}
                aria-label="Scratch the decorative surface to reveal the celebration poster"
              />}
              {!revealed && <div className="durga-instruction" id="durga-instructions">
                <span className="durga-mandala">✦</span>
                <strong id="durga-title">Devi Celebrations</strong>
                <span>{durgaFestivalConfig.title}</span>
                <span>{durgaFestivalConfig.dates}</span>
                <em>☝ Scratch to reveal</em>
                <small>{Math.round(scratchPercent * 100)}% revealed</small>
              </div>}
            </div>
            {!revealed && <div className="durga-actions">
              {!revealed && <button className="durga-skip" onClick={completeReveal}>Skip scratch &amp; reveal</button>}
              <button className="durga-dismiss" onClick={closeExperience}>Close</button>
            </div>}
          </div>
        </div>
      )}
    </>
  )
}