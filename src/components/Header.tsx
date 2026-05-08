'use client'

import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  let name: string

  switch (pathname) {
    case '/':
      name = 'About Me'
      break
    case '/projects':
      name = 'Projects'
      break
    case '/resume':
      name = 'Resume'
    default:
      name = ''
  }
  return <h1 className="text-5xl font-black ml-8">{name}</h1>
}
