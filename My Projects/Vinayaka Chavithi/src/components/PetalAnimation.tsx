import React, { useEffect, useRef, useState } from 'react'
import lotusPetals from '../assets/lotusPetals.gif'

export default function PetalAnimation(){
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(true)

  useEffect(()=>{
    const wrapper = wrapperRef.current
    if(!wrapper) return
    const observer = new IntersectionObserver(([entry])=>setActive(entry.isIntersecting), {threshold: 0})
    observer.observe(wrapper)
    return ()=>observer.disconnect()
  },[])

  return (
    <div ref={wrapperRef} className="petal-gif" aria-hidden="true">
      {active && <img src={lotusPetals} alt="" draggable="false" />}
    </div>
  )
}