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
			name = 'Experience Timeline'
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
				<h1 className="mb-4 ml-8 text-5xl font-black underline decoration-amber-300 decoration-wavy decoration-3 underline-offset-8">
					{splitter(name, true)}
				</h1>
				<h1 className="mb-4 text-5xl font-black">{splitter(name, false)}</h1>
			</div>
		)
	} else if (size === 'header') {
		return (
			<div className="flex">
				<h1 className="mb-4 ml-8 text-3xl font-black underline decoration-amber-300 decoration-wavy decoration-3 underline-offset-8">
					{splitter(optionalName ? optionalName : ' ', true)}
				</h1>
				<h1 className="mb-4 text-3xl font-black">
					{splitter(optionalName ? optionalName : ' ', false)}
				</h1>
			</div>
		)
	} else {
		return (
			<div className="flex flex-row gap-1">
				<h1 className="mb-4 text-lg font-semibold underline decoration-amber-300 decoration-wavy decoration-3 underline-offset-4">
					{optionalName?.split(' ').shift()}
				</h1>
				<h1 className="mb-4 text-lg font-semibold">
					{optionalName?.split(' ').slice(1).join(' ')}
				</h1>
			</div>
		)
	}
}
