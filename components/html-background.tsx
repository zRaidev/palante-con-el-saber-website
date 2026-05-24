'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function HtmlBackground() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/chat') {
      document.documentElement.style.backgroundColor = '#0a1628'
      document.body.style.backgroundColor = '#0a1628'
    } else {
      document.documentElement.style.backgroundColor = ''
      document.body.style.backgroundColor = ''
    }
  }, [pathname])

  return null
}
