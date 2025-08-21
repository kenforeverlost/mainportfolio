'use client'

import React, { createContext, useEffect, useRef, useState } from 'react'

export const VisibleContext = createContext(false)

export const VisibleProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <VisibleContext.Provider value={visible}>
      <div ref={ref}>{children}</div>
    </VisibleContext.Provider>
  )
}
