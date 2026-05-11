'use client'

import { usePathname } from 'next/navigation'

type SizeOption = 'title' | 'header' | 'subHeader'

interface HeaderProps {
  size: SizeOption
  optionalName?: string
}

export function Header({ optionalName, size }: HeaderProps) {
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
      break
    default:
      name = ''
  }
  function splitter(name: string, firstPart: boolean) {
    const nameArray = [...name!]
    if (firstPart) {
      return nameArray.splice(0, 2).join('')
    } else {
      return nameArray.splice(2).join('')
    }
  }

  if (size === 'title') {
    return (
      <div className="flex">
        <h1 className="text-5xl font-black ml-8 mb-4 underline decoration-wavy decoration-3 underline-offset-8 decoration-amber-300">
          {splitter(name, true)}
        </h1>
        <h1 className="text-5xl font-black mb-4">{splitter(name, false)}</h1>
      </div>
    )
  } else if (size === 'header') {
    return (
      <div className="flex">
        <h1 className="text-3xl font-black ml-8 mb-4 underline decoration-wavy decoration-3 underline-offset-8 decoration-amber-300">
          {splitter(optionalName ? optionalName : ' ', true)}
        </h1>
        <h1 className="text-3xl font-black mb-4">
          {splitter(optionalName ? optionalName : ' ', false)}
        </h1>
      </div>
    )
  } else {
    return (
      <div className="flex">
        <h1 className="text-2xl font-black ml-8 mb-4 underline decoration-wavy decoration-3 underline-offset-8 decoration-amber-300">
          {splitter(optionalName ? optionalName : ' ', true)}
        </h1>
        <h1 className="text-2xl font-black mb-4">
          {splitter(optionalName ? optionalName : ' ', false)}
        </h1>
      </div>
    )
  }
}
